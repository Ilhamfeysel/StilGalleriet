import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HomePageButtons = () => {
  const navigate = useNavigate(); // Navigation function

  // Function to handle navigation
  const handleNavigation = (link) => {
    navigate(link);
  };

  return (
    <Container fluid style={{ background: "#B2A584" }}>
      <Row style={{ justifyContent: "space-between", paddingTop: "20px", paddingBottom: "20px" }}>
       <Col xs="auto"> 
          <Button variant="outline-secondary" onClick={() => handleNavigation("/register")}>Register</Button>{' '}
          <Button variant="outline-secondary" onClick={() => handleNavigation("/login")}>Sign In</Button>{' '}
          <Button variant="outline-secondary" onClick={() => handleNavigation("/new-ad")}>New Ad</Button>
        </Col>
        <Col style={{ display: "flex", justifyContent: "flex-end", alignItems: "end" }}>
          <Button variant="outline-secondary" style={{ position: "relative", bottom: "-50px" }} onClick={() => handleNavigation("/sell")}>Sell Now</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePageButtons;



