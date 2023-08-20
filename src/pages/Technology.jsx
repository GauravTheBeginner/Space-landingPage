import React, { useEffect, useState } from "react";
import "../styles/Technology.css";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import { motion } from "framer-motion"; // Import Framer Motion
import capsule from "../images/spaceCapsule.svg";
import spaceport from "../images/spaceport.svg";
import launchvehicle from "../images/launchvehicle.svg";

const Technology = () => {
  const [activePage, setActivePage] = useState("capsule");

  useEffect(() => {
    const preloadImages = [capsule, spaceport, launchvehicle];
    preloadImages.forEach((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
    });
    
    console.log(`Active page changed to: ${activePage}`);
  }, [activePage]);
  
  const handleLinkClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="Technology">
      <Navbar />
      <Heading number="03" title="SPACE LAUNCH 101" />
      <div className="parent_technology">
        <div className="technology_navbar">
          <nav>
            <ul>
              <li onClick={() => handleLinkClick("capsule")}>
                <a href="#">1</a>
              </li>
              <li onClick={() => handleLinkClick("vehicle")}>
                <a href="#">2</a>
              </li>
              <li onClick={() => handleLinkClick("report")}>
                <a href="#">3</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="tech_change">
          {activePage === "capsule" && (
            <motion.div
              className="techcontent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.8 }}
            >
              <div className="techabout">
                <div className="techdomain">THE TERMINOLOGY…</div>
                <div className="techName">LAUNCH VEHICLE</div>
                <div className="techinfo">
                A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
                </div>
              </div>
              <motion.img src={capsule} alt="" loading="lazy" />
            </motion.div>
          )}
          {activePage === "vehicle" && (
            <motion.div
              className="techcontent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.8 }}
            >
              <div className="techabout">
                <div className="techdomain">THE TERMINOLOGY…</div>
                <div className="techName">SPACEPORT</div>
                <div className="techinfo">
                A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.
                </div>
              </div>
              <motion.img src={spaceport} alt="" loading="lazy" />
            </motion.div>
          )}
          {activePage === "report" && (
            <motion.div
              className="techcontent"
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              exit={{ opacity: 0}}
              transition={{ duration: 1.8}}
            >
              <div className="techabout">
                <div className="techdomain">THE TERMINOLOGY…</div>
                <div className="techName">SPACE CAPSULE</div>
                <div className="techinfo">
                A space capsule is an often-crewed spacecraft that uses a
                  blunt-body reentry capsule to reenter the Earth's atmosphere
                  without wings. Our capsule is where you'll spend your time
                  during the flight. It includes a space gym, cinema, and plenty
                  of other activities to keep you entertained.
                </div>
              </div>
              <motion.img src={launchvehicle} alt="" loading="lazy" />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Technology;
