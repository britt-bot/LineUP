import React from "react";
import { Button } from "react-bootstrap";

function FavoriteBtn() {
  return (
    <Button
      className="favBtn"
      variant="outline-transparent"
      // onClick=
    >
      <ion-icon name="star-outline"></ion-icon>
    </Button>
  );
}

export default FavoriteBtn;
