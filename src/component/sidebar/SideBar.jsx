import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      
      stiffness: 400,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      
      stiffness: 400,
    },
  },
};
const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants} style={{ background: open ? 'inherit' : 'transparent', zIndex: open ? '999' : '0' }}
 >
        <Links setOpen={setOpen}/>
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default SideBar;