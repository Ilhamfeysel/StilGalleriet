import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

const BootstrapFooter = () => {
  return (
    <Container fluid style={{ background: "red" }}>
      <Row
        style={{
          textAlign: "center",
        }}
      >
        <Col>
          <p>StilGalleriet</p>
          <Link className="about" to="/about">
            About us
          </Link>
        </Col>
        <Col>
          <p>Discover</p>
        </Col>

        <Col>
          <p>Help</p>
        </Col>
      </Row>

      <Row>
        {/*You can use style on Bootstrap components*/}
        <Col style={{ textAlign: "center", borderTop: "solid black 1px" }}>
          {/*You can also use Bootstrap classes*/}
          {/*Here it sets padding top-bottom(x-axis), Background color as Bootstrap warning and text as white*/}
          <a class="px-4 bg-warning text-white" href="">
            Privacy policy
          </a>
          <a class="px-4 bg-primary text-black" href="">
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
