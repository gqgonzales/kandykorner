import React from "react";
import { ApplicationViews } from "./ApplicationViews";
import "./KandyKorner.css";

export const KandyKorner = () => (
  <>
    <h1 className="header__namecard">KandyKorner</h1>
    <h2 className="header__subtext">
      The sweetest treats in town!
    </h2>
    <ApplicationViews />
  </>
);
