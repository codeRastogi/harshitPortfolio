import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "HackwithIndia",
    img: "/hackwithindia.png",
    desc: "A branding website for the HackwithIndia hackathon, featuring integrated registration links and a backend for the query form.",
    link: "https://nextapphackwithindia.vercel.app/"
  },
  {
    id: 2,
    title: "React Shopping Cart",
    img: "/shopping.png",
    desc: "A frontend-only interactive shopping cart application built with React, featuring product listings and cart functionality.",
    link: "https://shopingcart-rho.vercel.app/"
  },
  {
    id: 3,
    title: "Ed-Tech React App",
    img: "/edtech.png",
    desc: "A frontend-only educational platform designed to facilitate online learning and course management using React.",
    link: "https://studynotion-eta.vercel.app/"
  },
  {
    id: 4,
    title: "Animated Portfolio",
    img: "/portfolioimg.png",
    desc: "A visually appealing and interactive portfolio showcasing personal projects, skills, and achievements with smooth animations.",
    link: "https://harshit-portfolio-ashy.vercel.app/"
  }
];


const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button><a href={item.link} target="_blank">See Demo</a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;