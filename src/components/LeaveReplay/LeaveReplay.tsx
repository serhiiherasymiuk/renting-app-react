import React, { useEffect, useState } from "react";
import "./LeaveReplay.css";
import { IRating } from "../../types/rating";
import { addRating } from "../../store/reducers/property.reducer";
import { useDispatch } from "react-redux";

export function LeaveReplay({
  ratings: initialRatings,
  propertyId,
}: {
  ratings?: IRating[];
  propertyId: number;
}) {
  const [ratings, setRatings] = useState(initialRatings);
  useEffect(() => {
    setRatings(initialRatings);
  }, [initialRatings]);
  const dispatch = useDispatch();
  const calculatePercentage = (rate: number): string => {
    const total = ratings?.length ?? 0;
    const count = ratings?.filter((replay) => replay.rate === rate).length ?? 0;
    const percentage = (count / total) * 100;
    if (!percentage) return `0%`;
    return `${percentage.toFixed(0)}%`;
  };

  const getHrStyle = (rate: number): React.CSSProperties => {
    const percentage = parseFloat(calculatePercentage(rate));
    return {
      width: "300px",
      backgroundColor: "lightgray",
      height: "10px",
      borderRadius: "4px",
      border: "none",
      backgroundImage: `linear-gradient(to right, #0fb3af ${percentage}%, transparent ${percentage}%)`,
    };
  };

  const [hoverRating, setHoverRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);

  const handleStarHover = (rating: number) => {
    setHoverRating(rating);
  };

  const handleStarLeave = () => {
    setHoverRating(selectedRating);
  };

  const handleStarClick = (rating: number) => {
    setSelectedRating(rating);
  };

  function handleSubmit() {
    const rating = { id: 1, rate: selectedRating };
    dispatch(addRating(propertyId, rating));
    setRatings((prevRatings) =>
      prevRatings ? [...prevRatings, rating] : [rating]
    );
  }

  return (
    <div className="LeaveReplay">
      <div className="leave-replay">
        <h2>Leave a Replay</h2>
        <div>
          {[1, 2, 3, 4, 5].map((rating) => (
            <i
              key={rating}
              className={`bi bi-star${
                rating <= (hoverRating || selectedRating) ? "-fill" : ""
              }`}
              onMouseEnter={() => handleStarHover(rating)}
              onMouseLeave={handleStarLeave}
              onClick={() => handleStarClick(rating)}
            ></i>
          ))}
        </div>
        <button onClick={handleSubmit} className="styled-button">
          Post Replay
        </button>
      </div>
      <div>
        <h2>Average Rating</h2>
        <div className="rating-percentage">
          <div>
            <p>5 Star</p>
            <hr style={getHrStyle(5)} />
            <p> {calculatePercentage(5)}</p>
          </div>
          <div>
            <p>4 Star</p>
            <hr style={getHrStyle(4)} />
            <p> {calculatePercentage(4)}</p>
          </div>
          <div>
            <p>3 Star</p>
            <hr style={getHrStyle(3)} />
            <p> {calculatePercentage(3)}</p>
          </div>
          <div>
            <p>2 Star</p>
            <hr style={getHrStyle(2)} />
            <p> {calculatePercentage(2)}</p>
          </div>
          <div>
            <p>1 Star</p>
            <hr style={getHrStyle(1)} />
            <p> {calculatePercentage(1)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
