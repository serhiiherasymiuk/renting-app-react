import React from "react";
import "./Home.css";
import { Banner } from "./Banner/Banner";
import { Reasons } from "./Reasons/Reasons";
import { Works } from "./Works/Works";

export function Home() {
  return (
    <div className="Home">
      <Banner></Banner>
      <Reasons></Reasons>
      <Works></Works>
    </div>
  );
}
