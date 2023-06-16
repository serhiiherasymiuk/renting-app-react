import React, { useState } from "react";
import "./Read.css";
import properties from "../../mock/properties";
import { IProperty } from "../../types/property";
import { Property } from "../Property";
import { IRating } from "../../types/rating";
import { useDispatch, useSelector } from "react-redux";
import { selectAllProperties } from "../../store/reducers/property.reducer";

export function Read() {
  const allProperties = useSelector(selectAllProperties);
  const [filteredProperties, setFilteredProperties] =
    useState<IProperty[]>(allProperties);
  const [sort, setSort] = useState("Most Recent");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 3;
  const pageRange = 3;

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
    }
    filterRecent();
  }

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
    window.scrollTo(0, 0);
  };

  const goToLastPage = () => {
    const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
    setCurrentPage(totalPages);
    window.scrollTo(0, 0);
  };

  const renderPageNumbers = () => {
    const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
    const currentPageIndex = currentPage - 1;
    let startPageIndex = Math.max(
      0,
      currentPageIndex - Math.floor(pageRange / 2)
    );
    let endPageIndex = Math.min(startPageIndex + pageRange - 1, totalPages - 1);

    if (currentPage === totalPages && totalPages >= pageRange) {
      startPageIndex = Math.max(0, totalPages - pageRange);
      endPageIndex = totalPages - 1;
    }

    const pageNumbers = [];
    for (let i = startPageIndex; i <= endPageIndex; i++) {
      pageNumbers.push(
        <li
          key={i + 1}
          onClick={() => setCurrentPage(i + 1)}
          className={currentPage === i + 1 ? "active" : ""}
        >
          {i + 1}
        </li>
      );
    }
    return pageNumbers;
  };

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
        {currentProperties.map((property: IProperty) => (
          <Property key={property.id} property={property} />
        ))}
      </div>
      <div className="pagination">
        {filteredProperties.length > propertiesPerPage && (
          <ul>
            <li onClick={goToFirstPage}>
              <i className="bi bi-chevron-double-left"></i>
            </li>
            <li onClick={previousPage}>
              <i className="bi bi-chevron-left"></i>
            </li>
            {renderPageNumbers()}
            <li onClick={nextPage}>
              <i className="bi bi-chevron-right"></i>
            </li>
            <li onClick={goToLastPage}>
              <i className="bi bi-chevron-double-right"></i>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
