import React from "react";
import "./Header.css";
import logo from "../../materials/logo.png";

export function Header() {
  return (
    <div className="Header">
      <img className="logo" src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>Review a Property</li>
        <li>Read Reviews</li>
        <li>Articles</li>
      </ul>
      <button>Log In</button>
    </div>
  );
}
