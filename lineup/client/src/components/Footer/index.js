import React from "react";
import { FaEnvelope, FaArrowRight, FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { SiHeroku } from "react-icons/si";
import "./style.css";

function Footer() {
  let iconStyles = {color: "#FF6433" };
  let iconStyles1 = { color: "#3366FF" };
  return (
    <footer className="footer">
      <div class="row my-2 justify-content-center py-3">
         <div class="col-7">
            <div class="row">
              <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                <h3 class="mb-md-0 mb-5 bold-text">LINEUP</h3>
                  <div class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                    <p class="social mb-0 pb-0 bold-text"> 
                      <FaFacebook /> 
                      <FaLinkedin />
                      <FaTwitter />
                      <FaInstagram /> </p>
                  </div>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                    <h6 class="mb-3 mb-lg-1 bold-text mt-sm-0 mt-5"><b>MENU</b></h6>
                      <ul class="list-unstyled">
                        <li><FaArrowRight style={iconStyles} />   Home</li>
                        <li><FaArrowRight style={iconStyles} />   Login/Signup</li>
                        <li><FaArrowRight style={iconStyles} />   Profile</li>
                        <li><FaArrowRight style={iconStyles} />   Discover</li>
                      </ul>
                  </div>
                  <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                    <h6 class="mb-3 mb-lg-1 bold-text mt-sm-0 mt-5 text-warning"><b>CONTACT</b></h6>
                      <ul class="list-unstyled">
                        <li><FaEnvelope style={iconStyles1} />  Email</li>
                        <li><FaGithub style={iconStyles1} />  GitHub</li>
                        <li><SiHeroku style={iconStyles1} />  Heroku</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
      <span class="col-xl-7 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
        Copyright ©LINEUP 2021 | All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;
