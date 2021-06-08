import React from "react";
import { Link, Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import "./KandyKorner.css";
import { NavBar } from "./nav/NavBar";

export const KandyKorner = () => (
  <>
    <header className="main__header">
      {/*       <img
        src="/src/components/images/pixelHardCandy.png"
        alt="a delicious piece of candy"
      /> */}
      <h1 className="header__namecard">
        <Link to="/">KandyKorner</Link>
      </h1>
      <h3 className="header__subtext">
        <Link to="/">The sweetest treats in town!</Link>
      </h3>
      <NavBar />
    </header>

    <ApplicationViews />
  </>
);
