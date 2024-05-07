import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const mystyle = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <>
      <div className="container">
        <div className="box">
          <p>StilGalleriet</p>
          <a href="">About us</a>
          <a href="">Substainability</a>
          <a href="">Advertising</a>
        </div>
        <div className="box">
          <p>Discover</p>
          <a href="">How it works</a>
        </div>
        <div
          style={{
            background: "green",
            padding: "10px",
            margin: "10px",
            display: "flex",
            flexDirection: "column",
            width: "20%",
            height: "100px",
          }}
        >
          <p>Help</p>
          <a href="">Help Center</a>
          <a href="">Trust and Safety</a>
        </div>
      </div>
      <div style={{ background: "gray" }}>
        <a href="">Privacy Policy</a>
        <a href="">Cookie Policy</a>
        <a href="">Do not sell my Personal Information</a>
        <a href="">Terms & Conditions</a>
      </div>
    </>
  );
};

export default Footer;
