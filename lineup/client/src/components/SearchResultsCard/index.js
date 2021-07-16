import React from "react";

import "./style.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

function SearchResultsCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Event Name</Card.Title>
        <Card.Text>Event Summary</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Event Status</ListGroupItem>
        <ListGroupItem>Event Date</ListGroupItem>
        <ListGroupItem>Event Start Time</ListGroupItem>
        <ListGroupItem>Vanue Address</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Link to Venue</Card.Link>
        <Card.Link href="#">Link to Buy Tickets</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default SearchResultsCard;
