import React from "react";
import "../style/home.css";

const Footer = () => {
  const customStyle = {
    padding: "28px",
    background: "#d35400 ",
    left: "0",
    bottom: "0",
    textAlign: "center",
    display: "block",
    marginTop: "400px"
  };
  return (
    <div style={customStyle} className="footer">
      <h3>A new Recipe!</h3>
      <p>Powered by Edaman API</p>
    </div>
  );
};

export default Footer;
