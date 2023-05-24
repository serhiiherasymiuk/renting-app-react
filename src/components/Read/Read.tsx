import React, { useState } from "react";
import "./Read.css";
import properties from "../../mock/properties";
import { IProperty } from "../../types/property";
import { Property } from "../Property";
import { IRating } from "../../types/rating";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  selectProperties,
} from "../../store/reducers/property.reducer";

export function Read() {
  const dispatch = useDispatch();

  const plus = () => dispatch(increment());
  const minus = () => dispatch(decrement());
  const clear = () => dispatch(reset());

  const allProperties = useSelector(selectProperties);
  const [filteredProperties, setFilteredProperties] =
    useState<IProperty[]>(allProperties);
  const [sort, setSort] = useState("Most Recent");
  const [searchQuery, setSearchQuery] = useState("");

  const calculateAverageRating = (ratings: IRating[]) => {
    if (ratings.length === 0) {
      return 0;
    }
    const sum = ratings.reduce((total, rating) => total + rating.rate, 0);
    const average = sum / ratings.length;
    return parseFloat(average.toFixed(1));
  };

  function filterRecent() {
    setSort("Most Recent");
    const filtered = [...allProperties]
      .filter((property) =>
        (property.address + property.title)
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    setFilteredProperties(filtered);
  }

  function filterPopular() {
    setSort("Popular");
    const filtered = [...allProperties]
      .filter((property) =>
        (property.address + property.title)
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => b.ratings.length - a.ratings.length);
    setFilteredProperties(filtered);
  }

  function filterBest() {
    setSort("Best");
    const filtered = [...allProperties]
      .filter((property) =>
        (property.address + property.title)
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
      .sort(
        (a, b) =>
          calculateAverageRating(b.ratings) - calculateAverageRating(a.ratings)
      );
    setFilteredProperties(filtered);
  }

  function handleSearch() {
    if (searchQuery.trim() === "") {
      setSearchQuery("");
      setFilteredProperties([...allProperties]);
    } else {
      filterRecent();
    }
  }

  return (
    <div className="Read">
      <h2>Reviews properties</h2>
      <div className="inputs">
        <div className="button-container">
          <input
            placeholder="Start typing the address of the property"
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="button-container dropdown">
          <input readOnly placeholder={sort} type="text" />
          <button>
            <i className="bi bi-caret-down-fill"></i>
          </button>
          <div className="dropdown-content">
            <button onClick={filterRecent}>Most Recent</button>
            <button onClick={filterPopular}>Popular</button>
            <button onClick={filterBest}>Best</button>
          </div>
        </div>
      </div>
      <div className="property-container">
        {filteredProperties.map((property: IProperty) => (
          <Property key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
