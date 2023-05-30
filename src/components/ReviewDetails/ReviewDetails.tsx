import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./ReviewDetails.css";

export function ReviewDetails() {
  const { id } = useParams();
  const location = useLocation();
  const review = location.state?.review;
  const paragraphs = review.text.split("\n");

  return (
    <div className="ReviewDetails">
      <img src={review.photo} alt="" />
      <div>
        <h1>{review.title}</h1>
        <h1>{review.address}</h1>
      </div>
      <h4>Published {review.date.toString().slice(0, 16)}</h4>
      {paragraphs.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}
