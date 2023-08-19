import React from "react";
import "../styles/Home.css";
import { motion } from "framer-motion"; 
import Navbar from "../components/Navbar";

function Home() {
  return (
    <motion.div
      className="Home"
      initial={{ opacity: 0.8 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 1 }}    
      transition={{ duration: 0.3}} 
    >
      <Navbar />
      <div className="parent_home">
        <div className="home_content">
          <div className="so-you-want-to-trav">SO, YOU WANT TO TRAVEL TO</div>
          <div className="space">SPACE</div>

          <div className="let-s-face-it-if-yo">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of
            it. Well sit back, and relax because we’ll give you a truly out of
            this world experience!
          </div>
        </div>
        <motion.div
          className="explore_logo"
          whileHover={{ scale: 1.2 }} 
          whileTap={{ scale: 0.9 }}   
        >
          EXPLORE
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;
