import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SearchResultsCard from "../components/SearchResultsCard";
// import Pages from "../components/Pagination";

function Search(props) {
  const festivals = props.location.state.festivals;
  const filteredFestivals = festivals.filter(
    (v, i, a) => a.findIndex((t) => t.name === v.name) === i
  );
  return (
    <Container>
      <Row>
        {filteredFestivals.map((festival) => (
          <Col lg={4} md={4} style={{ marginBottom: 25 }}>
            <SearchResultsCard key={festival.name} festival={festival} />
          </Col>
        ))}
      </Row>
      {/* <Pages items={filteredFestivals} /> */}
    </Container>
  );
}

export default Search;
