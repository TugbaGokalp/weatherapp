import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-light py-3 fixed-bottom text-center">
      <Container>
        <Row>
          <Col>
            <p>Telif Hakkı © 2023 - Tuğba Gökalp</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
