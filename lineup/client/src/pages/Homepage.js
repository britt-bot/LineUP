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
              LINEUP is for every festival lover. 
              <br />We are bringing all the festivals around the world to you 
              <br />AND also giving you the power to dream up your ideal LINEUP for the LineUP community to upvote the best LINEUPs. 
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;
