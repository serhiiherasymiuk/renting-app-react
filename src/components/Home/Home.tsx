import React from "react";
import { Banner } from "./Banner/Banner";
import { Reasons } from "./Reasons/Reasons";
import { Works } from "./Works/Works";
import { Recently } from "./Recently/Recently";
import { OurArticles } from "./OurArticles/OurArticles";
import { KeepInTouch } from "./KeepInTouch/KeepInTouch";

export function Home() {
  return (
    <div className="Home">
      <Banner></Banner>
      <Reasons></Reasons>
      <Works></Works>
      <Recently></Recently>
      <OurArticles></OurArticles>
      <KeepInTouch></KeepInTouch>
    </div>
  );
}
