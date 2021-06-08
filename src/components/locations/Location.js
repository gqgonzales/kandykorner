/* import React from "react";
import "./Location.css";

export const Location = () => (
  <section className="location">
    <h3 className="location__name">Palo Mira</h3>
    <div className="location__address">2500 Alton Top Cir</div>
  </section>
); */

//  Made this for later

import React from "react";
import "./Location.css";
import { Link } from "react-router-dom";

export const Location = ({ locationObj }) => (
  <section className="location">
    <Link to={`/locations/${locationObj.id}`}>
      <h3 className="location__name">{locationObj.name}</h3>
    </Link>
    <div className="location__address">
      {locationObj.address}
    </div>
  </section>
);
