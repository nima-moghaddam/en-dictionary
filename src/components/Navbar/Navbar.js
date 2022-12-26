import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import moonSvg from "./../../assets/images/moon.svg";
import sunSvg from "./../../assets/images/sun.svg";
import bookSvg from "./../../assets/images/book.svg"
import "./Navbar.scss";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className={`navbar ${theme} navbar__bg-color`}>
      <span className="navbar__tag">
        <span className="navbar__tag-icon">
          <img src={bookSvg} alt='book' />
        </span>
        <span>English Dictionary</span>
      </span>
      {/* <nav></nav> */}
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className={`navbar__toggle-btn`}>
        {theme === "light" ? <img src={moonSvg} alt='moon'/> : <img src={sunSvg} alt='sun' /> }
      </button>
    </header>
  );
};

export default Navbar;