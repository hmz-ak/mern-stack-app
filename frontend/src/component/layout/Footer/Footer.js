import React from "react";
import "./Footer.css";
import logo from "../../../images/logo.png";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer>
        <section className="section3">
          <div className="column-container manage-container">
            <div className="logo-container">
              <img src={logo} className="logo" />
            </div>
            <div className="social-media-container">
              <li>
                <a href="https://www.facebook.com/">
                  <BsFacebook
                    style={{
                      color: "white",
                      fontSize: "1.1rem",
                      margin: "5px",
                    }}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com">
                  <BsInstagram
                    style={{
                      color: "white",
                      fontSize: "1.1rem",
                      margin: "5px",
                    }}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com">
                  <BsTwitter
                    style={{
                      color: "white",
                      fontSize: "1.1rem",
                      margin: "5px",
                    }}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com">
                  <BsPinterest
                    style={{
                      color: "white",
                      fontSize: "1.1rem",
                      margin: "5px",
                    }}
                  />
                </a>
              </li>
            </div>
          </div>
          <div className="column-container row-container">
            <ul className="footer-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
          <div className="column-container row-container">
            <ul className="footer-links">
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="">Community</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="column-container subscribe-form">
            <form action="">
              <input />
              <button id="submit" className="subscribe-btn btn" type="submit">
                Go
              </button>
              <p id="email-message"></p>
            </form>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
