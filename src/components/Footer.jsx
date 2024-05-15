import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

const BootstrapFooter = () => {
  return (
    <Container fluid style={{ background: "#d9d9d9" }}>
      <Row class="d-flex flex-row justify-content-around">
        <Col class="d-flex flex-column ">
          <p>StilGalleriet</p>
          <Link className="about" to="/about">
            About us
          </Link>
          <a href="">Substainability</a>
          <a href="">Advertising</a>
        </Col>
        <Col class="d-flex flex-column ">
          <p>Discover</p>
          <a href="">How it works</a>
        </Col>

        <Col class="d-flex flex-column ">
          <p>Help</p>
          <a href="">Help center</a>
          <a href="">Trust & Safety</a>
        </Col>
      </Row>

      <Row>
        <Col style={{ textAlign: "center", borderTop: "solid black 1px" }}>
          <a class="px-4" href="">
            Privacy policy
          </a>
          <a class="px-4 " href="">
            Cookie Policy
          </a>
          <a class="px-4" href="">
            Do not sell my Personal Information
          </a>
          <a class="px-4" href="">
            Terms & Conditions
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default BootstrapFooter;
