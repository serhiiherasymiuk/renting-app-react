import React from "react";
import { IProperty } from "../types/property";
import { IRating } from "../types/rating";
import { Link } from "react-router-dom";

export function Property({ property }: { property: IProperty }) {
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
      while (starIcons.length < 5)
        starIcons.push(<i className="bi bi-star"></i>);
    }
    return starIcons;
  };
  return (
    <>
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
                <p>{renderStars(calculateAverageRating(property.ratings))}</p>
              </div>
              <p>{property.ratings.length} Ratings</p>
            </div>
            <Link to={`/review/${property.id}`} state={{ review: property }}>
              <div>
                <i className="bi bi-arrow-right-circle-fill"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
