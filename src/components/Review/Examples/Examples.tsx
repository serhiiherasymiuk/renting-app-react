import React, { useState } from "react";
import "./Examples.css";
import properties from "../../../mock/properties";
import { IProperty } from "../../../types/property";
import { IRating } from "../../../types/rating";

export function Examples() {
  const [recently, setRecently] = useState(properties.slice(0, 3));
  const calculateAverageRating = (ratings: IRating[]) => {
    if (ratings.length === 0) {
      return 0;
    }
    const sum = ratings.reduce((total, rating) => total + rating.rate, 0);
    const average = sum / ratings.length;
    return parseFloat(average.toFixed(1));
  };

  const renderStars = (averageRating: number) => {
    const fullStars = Math.floor(averageRating);
    const hasHalfStar = averageRating % 1 !== 0;
    const starIcons = [];
    for (let i = 0; i < fullStars; i++) {
      starIcons.push(<i className="bi bi-star-fill"></i>);
    }
    if (hasHalfStar) {
      starIcons.push(<i className="bi bi-star-half"></i>);
    }
    if (starIcons.length < 5) {
      for (let i = 0; i < 5 - starIcons.length; i++)
        starIcons.push(<i className="bi bi-star"></i>);
    }
    return starIcons;
  };
  return (
    <div className="Examples">
      <h2>Here's some examples of reviews</h2>
      <p>More then 10000 clients who are happy with Us. Are You Next One?</p>
      <div className="property-container">
        {recently.map((property: IProperty) => (
          <div key={property.id}>
            <img src={property.photo} alt={property.title} />
            <div className="property-info">
              <h4>
                {property.address} {property.title}
              </h4>
              <div>
                <div className="rating">
                  <div>
                    <h2>{calculateAverageRating(property.ratings)}</h2>
                    <p>
                      {renderStars(calculateAverageRating(property.ratings))}
                    </p>
                  </div>
                  <p>{property.ratings.length} Ratings</p>
                </div>
                <div>
                  <i className="bi bi-arrow-right-circle-fill"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button>View All</button>
    </div>
  );
}
