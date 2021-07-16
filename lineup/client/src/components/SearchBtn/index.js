import React from "react";
import "./style.css";
import { Button, Form, FormControl } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function Searchbtn() {
  console.log(process.env.REACT_APP_EVENT_API_KEY);
  const [search, setSearch] = useState("");

  const handleClick = async (event) => {
    console.log("clicked");
    event.preventDefault();

    const url = `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.REACT_APP_EVENT_API_KEY}&keyword=`;

    const response = await axios.get(
      url + search + "&locale=en-us&countryCode=US&segmentName=music&page=1"
    );
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  return (
    <Form inline className="searchbtn">
      <FormControl
        type="text"
        placeholder="Search"
        className=" mr-sm-2"
        onChange={handleChange}
      />
      <Button
        className="searchclick"
        variant="outline-dark"
        onClick={handleClick}
      >
        <ion-icon name="search-outline"></ion-icon>
      </Button>
    </Form>
  );
}

export default Searchbtn;
