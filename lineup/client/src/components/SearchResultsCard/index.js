import React from "react";

import "./style.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import FavoriteBtn from "../FavoriteBtn";

function SearchResultsCard(props) {
  // console.log(props);
  const {
    festival: { name, summary, logo, status, date, start, venues, ticket },
  } = props;
  return (
    <Card className="cardGroup" style={props.style}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title className="cardTitle">{name}</Card.Title>
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
        <FavoriteBtn />
      </Card.Body>
    </Card>
  );
}

export default SearchResultsCard;
