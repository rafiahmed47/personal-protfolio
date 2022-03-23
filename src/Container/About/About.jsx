import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {images} from '../../Constants'
import './About.scss'

const abouts = [
  { title: "Web Developments", description: "I am a developer", imgUrl: images.about01},
  { title: "Web Developments", description: "I am a developer", imgUrl: images.about02 },
  { title: "Web Developments", description: "I am a developer", imgUrl: images.about03},
  { title: "Web Developments", description: "I am a developer", imgUrl: images.about04},
];

const About = () => {
  return (
    <div id="about" style={{marginTop: '4rem'}}>
      <h2 className="head-text">More <span>About</span> Me</h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={index}
          >
            <img src={about.imgUrl} alt="" />
            <h2 className="bold-text" style={{ marginTop: "20px" }}>
              {about.title}
            </h2>
            <p style={{ marginTop: "10px" }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
