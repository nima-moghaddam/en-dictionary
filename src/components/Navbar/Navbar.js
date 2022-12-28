import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import moonSvg from "./../../assets/images/moon.svg";
import sunSvg from "./../../assets/images/sun.svg";
import bookSvg from "./../../assets/images/book.svg"
import { motion } from 'framer-motion';
import Toggle from 'react-toggle'
import "./Navbar.scss";
import "react-toggle/style.css"


const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className='navbar' >
      <div className="navbar__tag">
        <span className="navbar__tag-icon">
          <img src={bookSvg} alt='book' />
        </span>
        <span>English Dictionary</span>
      </div>
      <label>
        <Toggle
          defaultChecked={false}
          onChange={() => setTheme(theme === "light" ? "dark" : "light")} 
          icons={{
            checked: <img className="navbar__toggle-icon" src={moonSvg} />,
            unchecked: <img className="navbar__toggle-icon" src={sunSvg} />,
          }}
        />       
      </label>
      {/* <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className={`navbar__toggle-btn`}>
        <motion.img  src={theme === "light" ? moonSvg : sunSvg} alt='toggle'/>
      </button> */}
    </header>
  );
};

export default Navbar;
