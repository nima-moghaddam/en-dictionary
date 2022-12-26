import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Card.scss";

const Card = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return <div className={`card ${theme} card__bg-color`}>{children}</div>;
};

export default Card;
