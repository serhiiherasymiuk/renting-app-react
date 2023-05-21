import React from "react";
import "./Review.css";
import { ReviewBanner } from "./ReviewBanner/ReviewBanner";
import { Examples } from "./Examples/Examples";

export function Review() {
  return (
    <div className="Review">
      <ReviewBanner></ReviewBanner>
      <Examples></Examples>
    </div>
  );
}
