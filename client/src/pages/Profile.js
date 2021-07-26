import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import axios from "axios";
import SearchResultsCard from "../components/SearchResultsCard";
import ProgressLanding from "../components/ProgressLanding";
// import photo from "../components/images/cat-avatar.jpg";
import API from "../utils/API";

function Profile(props) {
  // const photo = { photo };
  // const userName = { userName };
  // const location = { location };
  const [favoritesData, setFavoritesData] = useState([]);

  // useEffect(() => {
  //   const localstorage_user = JSON.parse(localStorage.getItem("user"));
  //   if (localstorage_user === null) {
  //     return;
  //   } else {
  //     const userFavorites = localstorage_user.data._id;
  //     console.log(userFavorites);
  //     const favoritePacket = {
  //       favorites: userFavorites,
  //     };
  //     API.getUser(favoritePacket)
  //       .then((res) => console.log(res.data))
  //       .catch((err) => console.log(err));

  //     let tempArray = [];
  //     favoritePacket.map((favorite) => {
  //       const url = `https://app.ticketmaster.com/discovery/v2/events/${favorite}?apikey=${process.env.REACT_APP_EVENT_API_KEY}`;
  //       axios
  //         .get(url)
  //         .then((res) => {
  //           // setFavoritesData([...favoritesData, res.data]);
  //           tempArray.push(res.data);
  //           console.log(res);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     });
  //     console.log("tempArray", tempArray);
  //     setFavoritesData(tempArray);
  //   }
  // }, []);
  return (
    <div>
      {/* {favoritesData.map((favorite) => {
        return <SearchResultsCard festival={favorite} />;
      })} */}
      <ProgressLanding></ProgressLanding>
    </div>
  );
}

export default Profile;
