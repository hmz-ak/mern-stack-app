import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../../../images/logo_transparent.png";

const Footer = () => {
  return (
    <div>
      <footer>
        <section className="section3">
          <div className="column-container manage-container">
            <div className="logo-container">
              <img src={logo} alt={"logo"} className="logo" />
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
                <Link to={"/"}>Home</Link>
              </li>

              <li>
                <Link to={"/Products"}>Products</Link>
              </li>
              <li>
                <Link to={"/About"}>About Us</Link>
              </li>
            </ul>
          </div>
          <div className="column-container row-container">
            <ul className="footer-links">
              <li>
                <Link to={"/orders"}>Orders</Link>
              </li>
              <li>
                <Link to={"/account"}>Profile</Link>
              </li>
              <li>
                <Link to={"/"}>Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
