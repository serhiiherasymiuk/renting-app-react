import React from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";

export function LoginForm() {
  return (
    <div className="LoginForm">
      <h1>Log In Please</h1>
      <div className="input-container">
        <i className="bi bi-envelope"></i>
        <input placeholder="Enter Your email address here" type="text" />
      </div>
      <div className="input-container">
        <i className="bi bi-key"></i>
        <input placeholder="Enter Your password here" type="text" />
      </div>
      <div className="checkbox-container">
        <div>
          <input type="checkbox" />
          <p>Remember Password?</p>
        </div>
        <p>Forgot Password?</p>
      </div>
      <button>Log In</button>
      <hr />
      <p>
        Don`t have an account?
        <Link to={"/register"}>
          <span> SIGN UP</span>
        </Link>
      </p>
    </div>
  );
}
