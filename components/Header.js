import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <h1 className="headingStyle">Header</h1>
      <h3 style={headingStyle}>hi</h3>
    </header>
  );
};
const headingStyle = { color: "red", backgroundColor: "black" };
export default Header;
