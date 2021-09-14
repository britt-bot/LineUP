import React, { useState } from "react";
import { Button } from "react-bootstrap";
import API from "../../utils/API";

function FavoriteBtn(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = (props) => {
    setIsFavorite(!isFavorite);
    const localstorage_user = JSON.parse(localStorage.getItem("user"));
    if (localstorage_user === null) {
      return;
    } else {
      const inMemoryID = localstorage_user.data._id;
      console.log(inMemoryID);
      console.log("props");
      console.log(props);
      const favoriteInfo = {
        favorites: [
          { id: props.id },
          { name: props.name },
          { logo: props.logo },
          { status: props.status },
          { date: props.date },
          { start: props.start },
          { venues: props.venues },
          { ticket: props.ticket },
        ],
        _id: inMemoryID,
      };
      console.log(props);
      console.log(props.id);
      API.favoriteSave(favoriteInfo)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }
  };

  /*
     * For Catherine
     * const localstorage_user = JSON.parse(localStorage.getItem('user'))
        if (localstorage_user === null) {
            return
        }
        else {
        const userFavorites = localstorage_user.data._id
        const favoritePacket = {
            _id: userFavorites
        }
        API.getUser(favoritePacket)
              .then((res) => console.log(res.data))
              .catch((err) => console.log(err));
     */

  return (
    <Button
      style={{ color: isFavorite ? "#FFD700" : "black" }}
      className="favBtn"
      variant="outline-transparent"
      onClick={() => handleClick(props)}
      id={props.id}
      name={props.name}
    >
      <ion-icon
        style={{ color: isFavorite ? "gold" : "black" }}
        name={isFavorite ? "star" : "star-outline"}
      ></ion-icon>
    </Button>
  );
}

export default FavoriteBtn;
