import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import axios from "axios";
import SearchResultsCard from "../components/SearchResultsCard";
// import photo from "../components/images/cat-avatar.jpg";

function Profile() {
  // const photo = { photo };
  // const userName = { userName };
  // const location = { location };
  const [favoritesData, setFavoritesData] = useState([]);

  const favorites = ["vv17FZ4gGkMOlE5L", "G5vjZplRb0PI4"];
  useEffect(() => {
    let tempArray = [];
    favorites.map((favorite) => {
      const url = `https://app.ticketmaster.com/discovery/v2/events/${favorite}?apikey=${process.env.REACT_APP_EVENT_API_KEY}`;
      axios
        .get(url)
        .then((res) => {
          // setFavoritesData([...favoritesData, res.data]);
          tempArray.push(res.data);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
    console.log("tempArray", tempArray);
    setFavoritesData(tempArray);
  }, []);

  return (
    <div>
      {favoritesData.map((favorite) => {
        return <SearchResultsCard festival={favorite} />;
      })}
    </div>
  );
}

export default Profile;
