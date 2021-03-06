import React from "react";
import Hero from "../components/Hero";
import Logo from "../components/images/logo4.png";
import "../App.css";

function Homepage() {
  return (
    <div>
      <Hero>
        <img className="logo1" alt="logo" src={Logo}></img>
        <div className="slogan">
          <h1>Pick the best LINEUP!</h1>
          <h2>
            LINEUP is all about festivals, from all over the world, all of the
            time.
          </h2>
        </div>
      </Hero>
      {/* <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">

          </Col>
        </Row>
      </Container> */}
    </div>
  );
}

export default Homepage;
