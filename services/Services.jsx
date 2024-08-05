import React, { useRef, useEffect, useState } from 'react';
import "./services.scss";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 0,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  }
};

export const Services = () => {
  const ref = useRef();
  const [isMobile, setIsMobile] = useState(false);
  const isInView = useInView(ref, { margin: "-100px" });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.div
      className="services"
      ref={ref}
      initial="initial"
      animate={(isInView || isMobile) ? "animate" : "initial"}
      variants={variants}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          focus on Learning & growing in IT industry
          <br />
          and move forward...
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Key</motion.b> Skills
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For </motion.b>
            <motion.b whileHover={{ color: "orange" }}>Your </motion.b>
            Business.
          </h1>
          <button>What I Do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {['Branding', 'Branding', 'Branding', 'Branding'].map((title, index) => (
          <motion.div
            className="box"
            key={index}
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>{title}</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus molestias unde at veniam, id eaque quis iure.
            </p>
            <button>Go</button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
