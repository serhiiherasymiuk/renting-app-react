import React from "react";
import "./ReviewBanner.css";
import banner from "../../../materials/review_banner.png";

export function ReviewBanner() {
  return (
    <div className="ReviewBanner">
      <div>
        <h1>Review a property that you've lived in</h1>
        <h4>(or still living in)</h4>
        <div className="button-container">
          <input
            placeholder="Start typing the address of the property"
            type="email"
          />
          <button>Search</button>
        </div>
      </div>
      <img src={banner} alt="" />
    </div>
  );
}
