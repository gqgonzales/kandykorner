import React from "react";
import { ApplicationViews } from "./ApplicationViews";
import "./KandyKorner.css";

export const KandyKorner = () => (
  <>
    <header className="main__header">
      <h1 className="header__namecard">KandyKorner</h1>
      <h3 className="header__subtext">
        The sweetest treats in town!
      </h3>
    </header>
    <ApplicationViews />
  </>
);
