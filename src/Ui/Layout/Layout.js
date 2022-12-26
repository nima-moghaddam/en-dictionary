import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Layout.scss";

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`page-layout ${theme} layout__bg-color`}>
      {children}
    </section>
  );
};

export default Layout;
