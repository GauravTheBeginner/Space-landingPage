import React from "react";
import "../styles/Crew.css";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import commander from "../images/commander.svg"
const Crew = () => {
  return (
    <div className="Crew">
      <Navbar />
      <Heading number="02" title="Meet your crew" />
      <div className="crewParent">
        <div className="crewContent">
          <div className="crewAbout">
            <div className="crewdomain">Commander</div>
            <div className="crewname">Douglas Hurley</div>
            <div className="crewinfo">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</div>
          </div>
          <div className="crewNavbar">
            <ul>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
            </ul>
          </div>
        </div>
        <img src={commander} alt=""  />
      </div>
    </div>
  );
};

export default Crew;
