import "./Card.scss";

const Card = ({ children, classes }) => {
  return <div className={`card ${classes}`}>{children}</div>;
};

export default Card;
