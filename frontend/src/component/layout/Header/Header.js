import React from "react";
import "./Header.css";
import { useEffect } from "react";
import WebFont from "webfontloader";
import heroImage from "../../../images/hero-image.png";

import Navbar from "../Navbar/Navbar";

const Header = (props) => {
  useEffect(() => {
    // WebFont.load({
    //   google: {
    //     families: ["Roboto", "Droid Sans"],
    //   },
    // });
  }, []);

  return (
    <>
      <div className="header ">
        <Navbar />
        <div className="hero-container">
          <section className="hero-headline ">
            <div className="hero-title">
              <h1>
                Your Believe Is Our Priority.
                <br />
                Our Quality Admires You.
              </h1>
              <div>
                <button className="buy-now-btn btn">Buy Now</button>
              </div>
            </div>
          </section>
          <section className="hero-image">
            <img src={heroImage} alt="" />
          </section>
        </div>
      </div>
    </>
  );
};
export default Header;
