import "./navbar.scss"
import React from 'react'
import {animate, motion} from "framer-motion";
import SideBar from "../sidebar/SideBar";

const NavBar = () => {
  return (
    <div className="navbar">
        <SideBar/>
        <div className="wrapper">
            
            <motion.span 
            initial = {{opacity:0, scale: 0.5} }
            animate = {{opacity : 1, scale : 1}}
            transition={{duration : 0.5}}
            >WebDev Harshit</motion.span>
            <div className="social">
                <a href="https://github.com/codeRastogi"  target="_blank"><img src="/github.svg" alt="" /></a>
                <a href="https://www.linkedin.com/in/harshitrastogi01/" target="_blank"><img src="/linkdin.png" alt="" /></a>
                <a href="https://linktr.ee/harshit002" target="_blank"><img src="/linktree.png" alt="" /></a>
                <a href="https://www.instagram.com/harshit__002/" target="_blank"><img src="/instagram.png" alt="" /></a>
            </div>
        </div>

    </div>
  )
}

export default NavBar