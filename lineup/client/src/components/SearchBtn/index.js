import React from "react";
import "./style.css";
import { Button, Form, FormControl } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Searchbtn() {
  const [search, setSearch] = useState("");
  const history = useHistory();

  const handleClick = async (event) => {
    event.preventDefault();

    try {
      const url = `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.REACT_APP_EVENT_API_KEY}&keyword=`;

      const response = await axios.get(
        url + search + "&locale=en-us&countryCode=US&segmentName=music&page=1"
      );
      let searchResult = response.data._embedded.events;

      let filteredEvents = searchResult.filter((events) => {
        return "name" in events;
      });

      let festivals = filteredEvents.map((event) => {
        return {
          name: event.name,
          id: event.id,
          summary: event.description,
          ticket: event.url,
          logo: event.images[event.images.length - 1].url,
          status: event.dates.status.code,
          span: event.dates.spanMultipleDays,
          date: event.dates.start.localDate,
          start: event.dates.start.localTime,
          venues: event._embedded.venues[0].name,
          address: event._embedded.venues[0].address.line1,
          city: event._embedded.venues[0].city.name,
          state: event._embedded.venues[0].state.stateCode,
        };
      });

      // let resultsPages = [];
      // for (let index = 1; index <= response.data.page.totalPages; index++) {
      //   resultsPages.push({
      //     index: index,
      //     href: "/results/" + search + "/" + index,
      //   });
      // }

      // history.push("/search");
      history.push({
        pathname: "/search",
        // search: '?query=abc',
        state: { festivals },
      });

      console.log(festivals);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
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
        variant="outline-light"
        onClick={handleClick}
      >
        <ion-icon name="search-outline"></ion-icon>
      </Button>
    </Form>
  );
}

export default Searchbtn;
