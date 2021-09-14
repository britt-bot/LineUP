import React from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaArrowRight,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { SiHeroku } from "react-icons/si";
import "./style.css";
import { Button } from "react-bootstrap";

function Footer() {
  let iconStyles = { color: "#FF6433" };
  let iconStyles1 = { color: "lime" };
  return (
    <footer className="footer">
      <div className="row my-2 justify-content-center py-2">
        <div className="col-8">
          <div className="row">
            <div className="col-xl-6 col-md-4 col-sm-4 my-auto mx-auto a">
              <h3 className="mb-md-0 mb-5 bold-text">LINEUP</h3>
              <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end iconalign">
                <p className="social mb-0 pb-0">
                  <a
                    href="https://www.facebook.com/pickthebestLINEUP"
                    // className={window.location.pathname === "/"}
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/pickthebest-lineup"
                    // className={window.location.pathname === "/"}
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://twitter.com/bestLINEUPapp"
                    // className={window.location.pathname === "/"}
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.instagram.com/pickthebestlineup"
                    // className={window.location.pathname === "/"}
                  >
                    <FaInstagram />
                  </a>
                </p>
              </div>
            </div>
            <div className="col-xl-2 col-md-4 col-sm-4 menu">
              <h6 className="mb-3 mb-lg-1 bold-text mt-sm-0 mt-5">
                <b>MENU</b>
              </h6>
              <ul className="list-unstyled">
                <li>
                  <FaArrowRight style={iconStyles} />{" "}
                  <Link to="/" >
                    Home
                  </Link>
                </li>
                <li>
                  <FaArrowRight style={iconStyles} />{" "}
                  <Link
                    to="/login"
                    // className={window.location.pathname === "/login"}
                  >
                    Login/Sign Up
                  </Link>
                </li>
                <li>
                  <FaArrowRight style={iconStyles} />{" "}
                  <Link
                    to="/profile"
                    // className={window.location.pathname === "/profile"}
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <FaArrowRight style={iconStyles} />{" "}
                  <Link
                    to="/discover"
                    // className={window.location.pathname === "/discover"}
                  >
                    Discover
                  </Link>
                </li>
                <li>
                  <FaArrowRight style={iconStyles} />{" "}
                  <Button
                    variant="link"
                    // onClick={handleLogout}
                    className="logoutBtn"
                  >
                    Logout
                  </Button>
                </li>
              </ul>
            </div>
            <div className="col-xl-2 col-md-4 col-sm-4 contact">
              <h6 className="mb-3 mb-lg-1 bold-text mt-sm-0 mt-5 text-warning">
                <b>CONTACT</b>
              </h6>
              <ul className="list-unstyled">
                <li>
                  <FaEnvelope style={iconStyles1} />{" "}
                  <a
                    href="mailto:pickthebest.LINEUP@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    // className={window.location.pathname === "/"}
                  >
                    Email
                  </a>
                </li>
                <li>
                  <FaGithub style={iconStyles1} />{" "}
                  <a
                    href="https://github.com/britt-bot/Group_Project3"
                    target="_blank"
                    rel="noopener noreferrer"
                    // className={window.location.pathname === "/"}
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <SiHeroku style={iconStyles1} />{" "}
                  <a
                    href="https://lineup-festival.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    // className={window.location.pathname === "/"}
                  >
                    Heroku
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <span className="col-xl-6 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
        Copyright ©LINEUP 2021 | All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;
