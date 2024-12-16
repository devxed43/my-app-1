/* eslint-disable no-unused-vars */
import { Link, Outlet } from "react-router-dom";
// import { ReactComponent as SVGLOGO } from "./logo.svg";
import { Fragment } from "react";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <img src="/crown.svg" alt="crown" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
