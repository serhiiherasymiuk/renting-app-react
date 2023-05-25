import React from "react";
import "./LoginBanner.css";
import banner from "../../../materials/login_banner.png";

export function LoginBanner() {
  return (
    <div className="LoginBanner">
      <div>
        <h1>Nice to See You Again</h1>
        <h4>Welcome back</h4>
      </div>
      <img src={banner} alt="" />
    </div>
  );
}
