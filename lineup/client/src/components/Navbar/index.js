import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../images/logo4.png";
import { Button, Form, FormControl } from "react-bootstrap";
import RbNavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import axios from "axios";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
console.log(process.env.REACT_APP_EVENT_API_KEY);
const [search,setSearch] = useState('');

const handleClick = async (event) =>{
  console.log("clicked");
  event.preventDefault();

  const url = `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.REACT_APP_EVENT_API_KEY}&keyword=`

  const response = await axios.get(url + search + '&locale=en-us&countryCode=US&segmentName=music&page=1');
};

const handleChange = (event) => {
  console.log(event.target.value);
  setSearch(event.target.value);
};

  return (
    <RbNavBar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link className="navbar-brand" to="/">
        <img className="logo" alt="logo" src={Logo}></img>
      </Link>
      <RbNavBar.Toggle />
      <RbNavBar.Collapse>
        <Nav className="mr-auto">
          <Link
            to="/"
            className={
              window.location.pathname === "/" ||
              window.location.pathname === "/homepage"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Home
          </Link>
          <Link
            to="/Login"
            className={
              window.location.pathname === "/login"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Login
          </Link>
          <Nav>
            <Link
              to="/discover"
              className={
                window.location.pathname === "/discover"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Discover
            </Link>
          </Nav>
          <NavDropdown title="More" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#Signup">Sign Up</NavDropdown.Item>
            <NavDropdown.Item href="#action/2">action 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3">action 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/4">action 4</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </RbNavBar.Collapse>
      <Form inline className="searchbtn">
        <FormControl type="text" placeholder="Search" className=" mr-sm-2" onChange={handleChange}/>
        <Button variant="outline-primary" onClick={handleClick}>Submit</Button>
      </Form>
    </RbNavBar>
  );
}

export default Navbar;
