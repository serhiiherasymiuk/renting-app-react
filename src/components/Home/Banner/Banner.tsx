import React from "react";
import "./Banner.css";
import banner from "../../../materials/banner.png";

export function Banner() {
  return (
    <div className="Banner">
      <div>
        <h1>Share Your Student Renting Experience</h1>
        <p>Help other students make the right rental choice</p>
        <button>Search Now</button>
      </div>
      <img src={banner} alt="" />
    </div>
  );
}
