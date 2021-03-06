import React from "react";

import "./style.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import FavoriteBtn from "../FavoriteBtn";

function SearchResultsCard(props) {
  // console.log(props);
  const {
    festival: { name, summary, logo, status, date, start, venues, ticket, id },
  } = props;

  return (
    <Card key={id} className="cardGroup" style={props.style}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title className="cardTitle" key={name}>
          {name}
        </Card.Title>
        <Card.Text key={summary}>{summary}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem key={status}>{status}</ListGroupItem>
        <ListGroupItem key={date}>{date}</ListGroupItem>
        <ListGroupItem key={start}>{start}</ListGroupItem>
        <ListGroupItem key={venues}>{venues}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href={ticket} target="_blank">
          Buy Tickets
        </Card.Link>
        <FavoriteBtn
          id={id}
          name={name}
          status={status}
          date={date}
          start={start}
          venues={venues}
          ticket={ticket}
          logo={logo}
        />
      </Card.Body>
    </Card>
  );
}

export default SearchResultsCard;
