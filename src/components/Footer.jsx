import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container fluid style={{ background: "#d9d9d9" }}>
      <Row
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Col style={{ display: "flex", flexDirection: "column" }}>
          <p>StilGalleriet</p>
          <Link className="about" to="/about">
            About us
          </Link>
          <a href="">Substainability</a>
          <a href="">Advertising</a>
        </Col>
        <Col style={{ display: "flex", flexDirection: "column" }}>
          <p>Discover</p>
          <a href="">How it works</a>
        </Col>

        <Col style={{ display: "flex", flexDirection: "column" }}>
          <p>Help</p>
          <a href="">Help center</a>
          <a href="">Trust & Safety</a>
        </Col>
      </Row>

      <Row>
        <Col
          style={{
            borderTop: "solid black 1px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <a href="">Privacy policy</a>
          <a href="">Cookie Policy</a>
          <a href="">Do not sell my Personal Information</a>
          <a href="">Terms & Conditions</a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
