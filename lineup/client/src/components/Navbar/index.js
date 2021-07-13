import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../images/logo4.png";
import { Button, Form, FormControl } from "react-bootstrap";
import RbNavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <RbNavBar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link className="navbar-brand" to="/">
        <img class="logo" alt="logo" src={Logo}></img>
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
        <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
        <Button variant="outline-primary">Submit</Button>
      </Form>
    </RbNavBar>
  );
}

export default Navbar;
