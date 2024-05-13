import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Component that renders a set of buttons on the homepage
const HomePageButtons = () => {
  const navigate = useNavigate(); // the navigate function
  // Array of button data, defining label, link destination, and Bootstrap classes for styling
  const buttonLinks = [
    { label: "Register", link: "/register", bgColor: "bg-success", textColor: "text-black" },
    { label: "Sign In", link: "/login", bgColor: "bg-success", textColor: "text-black" },
    { label: "New Ad", link: "/new-ad", bgColor: "bg-success", textColor: "text-black" },
    { label: "Sell Now", link: "/sell", bgColor: "bg-success", textColor: "text-black" }
   
  ];

  // Function to handle navigation
  const handleNavigation = (link) => {
    navigate(link);
  };

  return (
    // Container for layout, using Bootstrap
    <Container fluid style={{ background: "#d9d9d9" }}>
      <Row style={{ justifyContent: "center", paddingTop: "20px", paddingBottom: "20px" }}>
        {buttonLinks.map((button, index) => (
          <Col key={index} style={{ textAlign: "center", margin: "10px" }}>
            <a
              href={button.link}
              className={`px-4 ${button.bgColor} ${button.textColor}`}
              style={{ padding: "10px 20px", borderRadius: "5px", display: "inline-block" }}
              onClick={(e) =>{
               e.preventDefault(); // Prevent default anchor behavior
                  navigate(button.link); // Use navigate to redirect
                  console.log("Navigating to:", button.link); // This will log the navigation target
                }}
                
               
                
        >
              {button.label}
            </a>
          </Col>      
        ))}
      </Row>
    </Container>
  );
};

export default HomePageButtons;


