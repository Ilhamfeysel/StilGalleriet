import React from "react";
import Hero_Image from "../assets/images/Hero_Image.png";

function HeroImage() {
  const containerStyle = {
    position: "relative",
    Width: "1000px",
    marginTop: "5%",
  };

  const imgStyle = {
    width: "100%",
    height: "auto",
  };

  const overlayStyle = {
    position: "absolute",
    top: "45%",
    left: "75%",
    transform: "translate(-50%, -50%)",
    textAlign: "right",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "10px",
  };

  const h1Style = {
    margin: "0",
    fontSize: "2vw",
    fontFamily: "League Gothic",
  };

  const buttonStyle = {
    display: "inline-block",
    textAlign: "center",
    marginTop: "10px",
    marginRight: "30%",
    padding: "5px 10px",
    backgroundColor: "#fff",
    color: "#000",
    textDecoration: "none",
    fontSize: "1.2vw",
    borderRadius: "20px",
    transition: "background-color 0.3s ease",
  };

  return (
    <div className="container" style={containerStyle}>
      <img
        src={Hero_Image}
        className="img-fluid"
        style={imgStyle}
        alt="Hero image"
      ></img>
      <div className="overlay" style={overlayStyle}>
        <h1 style={h1Style}>
          Are you ready for a
          <br />
          wardrobe cleanup?
        </h1>
        <a href="#" className="button" style={buttonStyle}>
          Sell now
        </a>
      </div>
    </div>
  );
}

export default HeroImage;
