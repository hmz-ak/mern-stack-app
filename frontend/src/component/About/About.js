import React from "react";
import Footer from "../layout/Footer/Footer";
import Navbar from "../layout/Navbar/Navbar";
import aboutImage from "../../images/about-image.jpg";
import "./About.css";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-header">
          <h1>About</h1>
        </div>
        <div className="about-box">
          <div>
            <h4>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
              expedita odio inventore minus voluptas ducimus non nemo
              voluptatibus veritatis debitis, sequi dignissimos tenetur
              asperiores quia repudiandae cupiditate veniam quidem maiores quos
              quae quo! Velit distinctio blanditiis veniam, laudantium deleniti
              soluta quia! Nihil repellat, dolorum enim vel illum aperiam
              numquam earum.
            </h4>
          </div>
          <div className="about-image">
            <img src={aboutImage} alt="" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
