import React from "react";
import "./RegisterForm.css";
import { Link } from "react-router-dom";

export function RegisterForm() {
  return (
    <div className="RegisterForm">
      <h1>Sign up Now</h1>
      <div className="input-container">
        <i className="bi bi-person"></i>
        <input placeholder="Full name here" type="text" />
      </div>
      <div className="input-container">
        <i className="bi bi-envelope"></i>
        <input placeholder="Enter Your email address here" type="email" />
      </div>
      <div className="input-container">
        <i className="bi bi-key"></i>
        <input placeholder="Enter Your password here" type="password" />
      </div>
      <div className="input-container">
        <i className="bi bi-key"></i>
        <input placeholder="Confirm password" type="password" />
      </div>
      <button>Submit</button>
      <hr />
      <p>
        Already have an account?
        <Link to={"/login"}>
          <span> SIGN In</span>
        </Link>
      </p>
    </div>
  );
}
