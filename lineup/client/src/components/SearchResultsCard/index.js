import React from "react";

import "./style.css";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

function SearchResultsCard(props) {
  // console.log(props);
  const {
    festival: { name, summary, logo, status, date, start, venues, ticket },
  } = props;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{summary}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{status}</ListGroupItem>
        <ListGroupItem>{date}</ListGroupItem>
        <ListGroupItem>{start}</ListGroupItem>
        <ListGroupItem>{venues}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href={ticket} target="_blank">
          Buy Tickets
        </Card.Link>
        <Button
          className="favBtn"
          variant="outline-transparent"
          // onClick=
        >
          <ion-icon name="star-outline"></ion-icon>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default SearchResultsCard;
