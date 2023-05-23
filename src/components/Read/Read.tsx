import React, { useState } from "react";
import "./Read.css";
import properties from "../../mock/properties";
import { IProperty } from "../../types/property";
import { Property } from "../Property";

export function Read() {
  const [allProperties, setAllProperties] = useState(properties.slice(0, 12));
  const [sort, setSort] = useState("Most Recent");
  const [searchQuery, setSearchQuery] = useState("");
  function filterRecent() {
    setSort("Most Recent");
    setAllProperties(
      [...properties]
        .filter((property) =>
          property.address.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    );
  }

  function filterPopular() {
    setSort("Popular");
    setAllProperties(
      [...properties]
        .filter((property) =>
          property.address.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => b.ratings.length - a.ratings.length)
    );
  }

  function handleSearch() {
    if (searchQuery.trim() === "") {
      setSearchQuery("");
      setAllProperties([...properties]);
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
