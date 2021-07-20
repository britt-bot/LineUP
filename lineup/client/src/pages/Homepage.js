import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Hero from "../components/Hero";
import BackgroundImage from "../components/images/rainbowconfetti.jpg";
import "../App.css"


function Homepage() {
  return (
    <div>
      <Hero backgroundImage={BackgroundImage}>
        <h1>LINEUP</h1>
        <h2>Pick the best LINEUP!</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <p className="text-center">
              LINEUP is all about festivals from all over the world all of the time.
              <br />
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;
