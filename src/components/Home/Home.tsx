import React from "react";
import "./Home.css";
import { Banner } from "./Banner/Banner";
import { Reasons } from "./Reasons/Reasons";
import { Works } from "./Works/Works";
import { Recently } from "./Recently/Recently";

export function Home() {
  return (
    <div className="Home">
      <Banner></Banner>
      <Reasons></Reasons>
      <Works></Works>
      <Recently></Recently>
    </div>
  );
}
