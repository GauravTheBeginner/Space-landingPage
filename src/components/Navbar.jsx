import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../images/logo.svg";
import navline from "../images/navline.svg";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="" />
        <img className="navline" src={navline} alt="" />

        <ul className="nav_item">
          <li>
            <Link to="/">
              <b>00</b> HOME
            </Link>
          </li>
          <li>
            <Link to="/destination">
              <b>01</b> DESTINATION
            </Link>
          </li>
          <li>
            <Link to="/crew">
              <b>02 </b> CREW
            </Link>
          </li>
          <li>
            <Link to="/technology">
              <b>03</b> TECHNOLOGY
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
