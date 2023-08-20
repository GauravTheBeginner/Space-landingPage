  import React, { useEffect, useState } from "react";
  import "../styles/Crew.css";
  import Navbar from "../components/Navbar";
  import Heading from "../components/Heading";
  import commander from "../images/commander.svg";
  import Specialist from "../images/specialist.svg";
  import engineer from "../images/engineer.svg";
  import pilot from "../images/pilot.svg";
  import { motion } from "framer-motion";
  const Crew = () => {
    const [activePage, setActivePage] = useState("commander");
    useEffect(() => {
      console.log(`Active page changed to:${activePage}`);
    }, [activePage]);
    const handleLinkClick = (page) => {
      setActivePage(page);
    };
    return (
      <div className="Crew">
        <Navbar />
        <Heading number="02" title="Meet your crew" />
        <div className="crewParent">
          <motion.div
            className="crewContent"
            initial={{ opacity: 1.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            {activePage === "commander" && (
              <motion.div className="crewAbout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.3 }}>
                <div className="crewdomain">Commander</div>
                <div className="crewname">Douglas Hurley</div>
                <div className="crewinfo">
                  Douglas Gerald Hurley is an American engineer, former Marine
                  Corps pilot and former NASA astronaut. He launched into space
                  for the third time as commander of Crew Dragon Demo-2.
                </div>
                </motion.div>
            )}
            {activePage === "Specialist" && (
              <motion.div className="crewAbout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.3 }}>
                <div className="crewdomain">Mission Specialist</div>
                <div className="crewname">MARK SHUTTLEWORTH</div>
                <div className="crewinfo">
                  Mark Richard Shuttleworth is the founder and CEO of Canonical,
                  the company behind the Linux-based Ubuntu operating system.
                  Shuttleworth became the first South African to travel to space
                  as a space tourist.
                </div>
                </motion.div>
            )}
            {activePage === "PILOT" && (
              <motion.div className="crewAbout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.3 }}>
                <div className="crewdomain">PILOT</div>
                <div className="crewname">Victor Glover</div>
                <div className="crewinfo">
                  Pilot on the first operational flight of the SpaceX Crew Dragon
                  to the International Space Station. Glover is a commander in the
                  U.S. Navy where he pilots an F/A-18.He was a crew member of
                  Expedition 64, and served as a station systems flight engineer.
                </div>
                </motion.div>
            )}
            {activePage === "Engineer" && (
              <motion.div className="crewAbout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.3 }}>
                <div className="crewdomain">Flight Engineer</div>
                <div className="crewname">Anousheh Ansari</div>
                <div className="crewinfo">
                  Anousheh Ansari is an Iranian American engineer and co-founder
                  of Prodea Systems. Ansari was the fourth self-funded space
                  tourist, the first self-funded woman to fly to the ISS, and the
                  first Iranian in space.
                </div>
                </motion.div>
            )}

            <motion.div
              className="crewNavbar"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 2 }}
            >
              <ul>
                <a href="#" onClick={() => handleLinkClick("commander")}></a>
                <a href="#" onClick={() => handleLinkClick("Specialist")}></a>
                <a href="#" onClick={() => handleLinkClick("PILOT")}></a>
                <a href="#" onClick={() => handleLinkClick("Engineer")}></a>
              </ul>
            </motion.div>
          </motion.div>
          {activePage === "commander" && (
            <motion.img
              src={commander}
              alt=""
              style={{ height: "95vh" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.3 }}
            />
          )}
          {activePage === "Specialist" && (
            <motion.img
              src={Specialist}
              alt=""
              style={{ height: "95vh" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.3 }}
            />
          )}
          {activePage === "PILOT" && (
            <motion.img
              src={pilot}
              alt=""
              style={{ height: "95vh" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.3 }}
            />
          )}
          {activePage === "Engineer" && (
            <motion.img
              src={engineer}
              alt=""
              style={{ height: "95vh" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.3 }}
            />
          )}
        </div>
      </div>
    );
  };

  export default Crew;
