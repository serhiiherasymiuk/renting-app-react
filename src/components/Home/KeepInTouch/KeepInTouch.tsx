import React from "react";
import "./KeepInTouch.css";

export function KeepInTouch() {
  return (
    <div className="KeepInTouch">
      <h2>Let's keep in touch</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste porro
        animi aut.
      </p>
      <div className="button-container">
        <input placeholder="Enter Your Email Here" type="email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}
