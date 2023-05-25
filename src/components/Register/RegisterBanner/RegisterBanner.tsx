import React from "react";
import "./RegisterBanner.css";
import banner from "../../../materials/register_banner.png";

export function RegisterBanner() {
  return (
    <div className="RegisterBanner">
      <div>
        <h1>Welcome to Uniletadvisor</h1>
        <h4>Sign up and begin your journey with us </h4>
      </div>
      <img src={banner} alt="" />
    </div>
  );
}
