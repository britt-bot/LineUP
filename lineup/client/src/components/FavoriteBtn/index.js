import React, { useState } from "react";
import { Button } from "react-bootstrap";
import API from "../../utils/API";

function FavoriteBtn(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
    const localstorage_user = JSON.parse(localStorage.getItem('user'))
    const inMemoryID = localstorage_user.data._id
    console.log(inMemoryID)
    // console.log(tokenInfo)
    const favoriteInfo = {
      favorites: props.id,
      _id: inMemoryID
    }
    console.log(props);
    console.log(props.id);
    API.favoriteSave(favoriteInfo)
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
