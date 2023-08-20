import React, { useEffect, useState } from "react";
import "../styles/Destination.css";
import { motion } from "framer-motion"; 
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import moon from "../images/moon.svg";
import mars from "../images/mars.svg";
import europa from "../images/europa.svg";
import titan from "../images/titan.svg";

const Destination = () => {
  const [activePage, setActivePage] = useState("moon");

  useEffect(() => {
    console.log(`Active page changed to: ${activePage}`);
  }, [activePage]);

  const handleLinkClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="Destination">
      <Navbar />
      <Heading number="01" title="PICK YOUR DESTINATION" />
      <div className="destination_navbar">
        <nav>
          <ul>
            <li onClick={() => handleLinkClick("moon")}>
              <a href="#">MOON</a>
            </li>
            <li onClick={() => handleLinkClick("mars")}>
              <a href="#">MARS</a>
            </li>
            <li onClick={() => handleLinkClick("europa")}>
              <a href="#">EUROPA</a>
            </li>
            <li onClick={() => handleLinkClick("titan")}>
              <a href="#">TITAN</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="destination_change">
        {activePage === "moon" && (
          <motion.div
            className="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8 }}
          >
            <img src={moon} alt="" />
            <div className="about">
              <div className="planet_name">MOON</div>
              <div className="planet_about">
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </div>
              <div className="planet_distance">
                <div className="distanceBox">
                  <div className="avgdistance">AVG. DISTANCE</div>
                  <div className="km">384,400 km</div>
                </div>
                <div className="distanceTime">
                  <div className="avgtime">Est. travel time</div>
                  <div className="time">3 days</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {activePage === "mars" && (
          <motion.div
            className="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8 }}
          >
            <img src={mars} alt="" />
            <div className="about">
              <div className="planet_name">MARS</div>
              <div className="planet_about">
                Don’t forget to pack your hiking boots. You’ll need them to
                tackle Olympus Mons, the tallest planetary mountain in our solar
                system. It’s two and a half times the size of Everest!
              </div>
              <div className="planet_distance">
                <div className="distanceBox">
                  <div className="avgdistance">AVG. DISTANCE</div>
                  <div className="km">225 MIL. km</div>
                </div>
                <div className="distanceTime">
                  <div className="avgtime">Est. travel time</div>
                  <div className="time">9 months</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {activePage === "europa" && (
          <motion.div
            className="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8 }}
          >
            <img src={europa} alt="" />
            <div className="about">
              <div className="planet_name">EUROPA</div>
              <div className="planet_about">
                The smallest of the four Galilean moons orbiting Jupiter, Europa
                is a winter lover’s dream. With an icy surface, it’s perfect for
                a bit of ice skating, curling, hockey, or simple relaxation in
                your snug wintery cabin.
              </div>
              <div className="planet_distance">
                <div className="distanceBox">
                  <div className="avgdistance">AVG. DISTANCE</div>
                  <div className="km">628 MIL. km</div>
                </div>
                <div className="distanceTime">
                  <div className="avgtime">Est. travel time</div>
                  <div className="time">3 years</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {activePage === "titan" && (
          <motion.div
            className="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8 }}
          >
            <img src={titan} alt="" />
            <div className="about">
              <div className="planet_name">TITAN</div>
              <div className="planet_about">
                The only moon known to have a dense atmosphere other than Earth,
                Titan is a home away from home (just a few hundred degrees
                colder!). As a bonus, you get striking views of the Rings of
                Saturn.
              </div>
              <div className="planet_distance">
                <div className="distanceBox">
                  <div className="avgdistance">AVG. DISTANCE</div>
                  <div className="km">1.6 BIL. km</div>
                </div>
                <div className="distanceTime">
                  <div className="avgtime">Est. travel time</div>
                  <div className="time">7 years</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Destination;
