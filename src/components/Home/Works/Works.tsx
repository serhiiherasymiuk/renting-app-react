import React from "react";
import "./Works.css";
import search from "../../../materials/search.png";
import point from "../../../materials/point.png";
import arrow from "../../../materials/arrow.png";
import vector_right from "../../../materials/vector_right.png";
import vector_left from "../../../materials/vector_left.png";
import reviews from "../../../materials/reviews.png";
import review from "../../../materials/review.png";
import ratings from "../../../materials/ratings.png";
import rating from "../../../materials/rating.png";
import { Link } from "react-router-dom";

export function Works() {
  return (
    <div className="Works">
      <div>
        <h2>How It Works</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          quae.
        </p>
      </div>
      <div>
        <div className="work-card">
          <img src={search} alt="" />
          <div>
            <img className="icon" src={point} alt="" />
            <div>
              <h3>Search for the address</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make
              </p>
              <Link to={"/review"}>
                <button className="styled-button">
                  Know More <img src={arrow} alt="" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <img className="vector-right" src={vector_left} alt="" />
        <div className="work-card">
          <div>
            <div className="right">
              <h3>Add your review</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make
              </p>
              <Link to={"/review"}>
                <button className="styled-button">
                  Know More <img src={arrow} alt="" />
                </button>
              </Link>
            </div>
            <img className="icon" src={review} alt="" />
          </div>
          <img src={reviews} alt="" />
        </div>
        <img className="vector-left" src={vector_right} alt="" />
        <div className="work-card">
          <img src={ratings} alt="" />
          <div>
            <img className="icon" src={rating} alt="" />
            <div>
              <h3>Share your review</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make
              </p>
              <Link to={"/review"}>
                <button className="styled-button">
                  Know More <img src={arrow} alt="" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link to={"/review"}>
        <button>Get Started</button>
      </Link>
    </div>
  );
}
