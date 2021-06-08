import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = (props) => {
  return (
    <ul className="navbar">
      <li className="navbar__item">
        <Link className="navbar__link" to="/locations">
          Locations
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/products">
          The Candy
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/productTypes">
          Candy Families
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/employees">
          Our Team
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/customers">
          Our Customers
        </Link>
      </li>
    </ul>
  );
};
