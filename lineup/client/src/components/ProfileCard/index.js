import React from "react";
import avatar from "../images/cat-avatar.jpg";
import "./style.css";

function ProfileCard(props) {
  return (
    <div className="card-container">
      <header>
        <img src={avatar} alt={props.name} />
      </header>
      <h1 className="bold-text">
        {props.name} <span className="normal-text">My Age</span>
      </h1>
      <h2 className="normal-text">My City</h2>
      <div className="social-container">
        <div className="followers">
          <h1 className="bold-text">Favorited Events</h1>
        </div>
        <div className="likes">
          <h1 className="bold-text">My Comments</h1>
        </div>
        <div className="photos">
          <h1 className="bold-text">My Events</h1>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
