import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import moonSvg from "./../../assets/images/moon.svg";
import sunSvg from "./../../assets/images/sun.svg";
import bookSvg from "./../../assets/images/book.svg"
import "./Navbar.scss";
import { motion } from 'framer-motion';

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className='navbar' >
      <span className="navbar__tag">
        <span className="navbar__tag-icon">
          <img src={bookSvg} alt='book' />
        </span>
        <span>English Dictionary</span>
      </span>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className={`navbar__toggle-btn`}>
        <motion.img  src={theme === "light" ? moonSvg : sunSvg} alt='toggle'/>
      </button>
    </header>
  );
};

export default Navbar;
