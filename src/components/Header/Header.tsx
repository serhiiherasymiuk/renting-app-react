import React from "react";
import "./Header.css";
import logo from "../../materials/logo.png";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  return (
    <div className="Header">
      <img className="logo" src={logo} alt="" />
      <ul>
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/review"
            className={location.pathname === "/review" ? "active" : ""}
          >
            Review a Property
          </Link>
        </li>
        <li>
          <Link
            to="/read"
            className={location.pathname === "/read" ? "active" : ""}
          >
            Read Reviews
          </Link>
        </li>
      </ul>
      <Link to={"/login"}>
        <button>Log In</button>
      </Link>
    </div>
  );
}
