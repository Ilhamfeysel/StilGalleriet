import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HomePageButtons = () => {
  const buttonLinks = [
    { label: "Register", link: "/register", bgColor: "bg-warning", textColor: "text-white" },
    { label: "Sign In", link: "/signin", bgColor: "bg-primary", textColor: "text-black" },
    { label: "Sell Now", link: "/sell", bgColor: "bg-success", textColor: "text-white" }
  ];

  return (
    <Container fluid style={{ background: "#d9d9d9" }}>
      <Row style={{ justifyContent: "center", paddingTop: "20px", paddingBottom: "20px" }}>
        {buttonLinks.map((button, index) => (
          <Col key={index} style={{ textAlign: "center", margin: "10px" }}>
            <a
              href={button.link}
              className={`px-4 ${button.bgColor} ${button.textColor}`}
              style={{ padding: "10px 20px", borderRadius: "5px", display: "inline-block" }}
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


