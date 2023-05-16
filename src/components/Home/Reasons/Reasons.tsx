import React from "react";
import "./Reasons.css";
import share from "../../../materials/share.png";
import help from "../../../materials/help.png";
import save from "../../../materials/save.png";
import improve from "../../../materials/improve.png";

export function Reasons() {
  return (
    <div className="Reasons">
      <div>
        <h2>Why Review Your Student Accommodation?</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book It has survived not only
          five centuries
        </p>
      </div>
      <div>
        <div>
          <img src={share} alt="" />
          <p>Share relevant infomation with other students</p>
        </div>
        <div>
          <img src={help} alt="" />
          <p>Help other students make informed rental decisions</p>
        </div>
        <div>
          <img src={save} alt="" />
          <p>
            Help other students save time when making rental decision Help to
            improve
          </p>
        </div>
        <div>
          <img src={improve} alt="" />
          <p>Help to improve student living standards</p>
        </div>
      </div>
    </div>
  );
}
