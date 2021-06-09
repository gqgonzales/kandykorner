import React from "react";
import { Link, Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { NavBar } from "./nav/NavBar";
import "./KandyKorner.css";

export const KandyKorner = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("kandy_customer")) {
          return (
            <>
              <header className="main__header">
                <h1 className="header__namecard">
                  <Link to="/">KandyKorner</Link>
                </h1>{" "}
                <h3 className="header__subtext">
                  <Link to="/">
                    The sweetest treats in town!
                  </Link>
                </h3>{" "}
                <NavBar />
              </header>

              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);
//     <header className="main__header">
//       {/*       <img
//         src="/src/components/images/pixelHardCandy.png"
//         alt="a delicious piece of candy"
//       /> */}
//       <h1 className="header__namecard">
//         <Link to="/">KandyKorner</Link>
//       </h1>
//       <h3 className="header__subtext">
//         <Link to="/">The sweetest treats in town!</Link>
//       </h3>
//       <NavBar />
//     </header>

//     <ApplicationViews />
//   </>
// );
