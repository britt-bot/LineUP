import React, { useState } from "react";
import { Button } from "react-bootstrap";

function FavoriteBtn() {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => setIsFavorite(!isFavorite);

  return (
    <Button
      style={{ color: isFavorite ? "#FFD700" : "black" }}
      className="favBtn"
      variant="outline-transparent"
      onClick={handleClick}
    >
      <ion-icon name="star-outline"></ion-icon>
    </Button>
  );
}

export default FavoriteBtn;
