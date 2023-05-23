import { useEffect, useState } from "react";
import "./Recently.css";
import properties from "../../../mock/properties";
import { IProperty } from "../../../types/property";
import { IRating } from "../../../types/rating";
import { Property } from "../../Property";
import { Link } from "react-router-dom";

export function Recently() {
  const [recently, setRecently] = useState(properties.slice(0, 6));

  return (
    <div className="Recently">
      <h2>Recently Reviewed</h2>
      <p>More then 10000 clients who are happy with Us. Are You Next One?</p>
      <div className="property-container">
        {recently.map((property: IProperty) => (
          <Property property={property}></Property>
        ))}
      </div>
      <Link to="/read">
        <button>View All</button>
      </Link>
    </div>
  );
}
