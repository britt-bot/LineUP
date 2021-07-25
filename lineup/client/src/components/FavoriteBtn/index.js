import React, { useState } from "react";
import { Button } from "react-bootstrap";
import API from "../../utils/API";

function FavoriteBtn(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
    console.log(props.id);
    API.favoriteSave(props.id)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
  };

  return (
    <Button
      style={{ color: isFavorite ? "#FFD700" : "black" }}
      className="favBtn"
      variant="outline-transparent"
      onClick={handleClick}
      id={props.id}
    >
      <ion-icon
        style={{ color: isFavorite ? "gold" : "black" }}
        name={isFavorite ? "star" : "star-outline"}
      ></ion-icon>
    </Button>
  );
}

export default FavoriteBtn;
