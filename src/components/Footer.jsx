import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container fluid style={{ background: "#d9d9d9", textAlign: "center" }}>
      <Row
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Col style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ color: "black" }}>StilGalleriet</p>
          <Link
            className="about"
            to="/about"
            style={{ color: "#555555", textDecoration: "none" }}
          >
            About us
          </Link>
          <a href="" style={{ color: "#555555", textDecoration: "none" }}>
            Substainability
          </a>
          <a href="" style={{ color: "#555555", textDecoration: "none" }}>
            Advertising
          </a>
        </Col>
        <Col style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ color: "black" }}>Discover</p>
          <a href="" style={{ color: "#555555", textDecoration: "none" }}>
            How it works
          </a>
        </Col>

        <Col style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ color: "black" }}>Help</p>
          <a href="" style={{ color: "#555555", textDecoration: "none" }}>
            Help center
          </a>
          <a href="" style={{ color: "#555555", textDecoration: "none" }}>
            Trust & Safety
          </a>
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
          <a href="" style={{ color: "#555555", textDecoration: "none" }}>
            Privacy policy
          </a>
          <a href="" style={{ color: "#555555", textDecoration: "none" }}>
            Cookie Policy
          </a>
          <a href="" style={{ color: "#555555", textDecoration: "none" }}>
            Do not sell my Personal Information
          </a>
          <a href="" style={{ color: "#555555", textDecoration: "none" }}>
            Terms & Conditions
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
