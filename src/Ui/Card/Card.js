import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Card.scss";

const Card = ({ children, classes }) => {
  const { theme } = useContext(ThemeContext);

  return <div className={`card ${theme} ${classes} card__bg-color`}>{children}</div>;
};

export default Card;
