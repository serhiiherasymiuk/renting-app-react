import React, { useState } from "react";
import "./Read.css";
import properties from "../../mock/properties";
import { IProperty } from "../../types/property";
import { Property } from "../Property";

export function Read() {
  const [allProperties, setAllProperties] = useState(properties.slice(0, 12));
  const [sort, setSort] = useState("Most Recent");
  function filterRecent() {
    setSort("Most Recent");
    setAllProperties(
      [...allProperties].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      })
    );
  }
  function filterPopular() {
    setSort("Popular");
    setAllProperties(
      [...allProperties].sort((a, b) => b.ratings.length - a.ratings.length)
    );
  }
  return (
    <div className="Read">
      <h2>Reviews properties</h2>
      <div className="inputs">
        <div className="button-container">
          <input
            placeholder="Start typing the address of the property"
            type="text"
          />
          <button>Search</button>
        </div>
        <div className="button-container dropdown">
          <input readOnly placeholder={sort} type="text" />
          <button>
            <i className="bi bi-caret-down-fill"></i>
          </button>
          <div className="dropdown-content">
            <button onClick={filterRecent}>Most Recent</button>
            <button onClick={filterPopular}>Popular</button>
          </div>
        </div>
      </div>
      <div className="property-container">
        {allProperties.map((property: IProperty) => (
          <Property property={property}></Property>
        ))}
      </div>
    </div>
  );
}
