import React, { useRef } from 'react'
import "./services.scss"

import {useInView, motion, color} from "framer-motion";

const variants = {
    intial:{
        x: -500,
        y: 0,
        opacity:0
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
}

export const Services = () => {
    const ref = useRef();

    const isInView = useInView(ref, {margin:"-100px"});

  return (
    <motion.div className="services" variants={variants} initial = "intial" ref={ref} animate={isInView && "animate"}>
        
        <motion.div className="textContainer" variants={variants} >
           <p>focus on Learning & growing in IT industory 
            <br />
            and move forward...
            </p>
            <hr /> 
        </motion.div>
        <motion.div className="titleContainer" variants={variants} >
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1><motion.b whileHover={{color : "orange"}}>Key</motion.b> Skills</h1>
                
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color : "orange"}}>For </motion.b>
                    <motion.b whileHover={{color : "orange"}}>Your </motion.b>
                     Business.</h1>
                <button>What I Do?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants} >
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestias unde at veniam, id eaque quis iure.</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestias unde at veniam, id eaque quis iure.</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestias unde at veniam, id eaque quis iure.</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestias unde at veniam, id eaque quis iure.</p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}
