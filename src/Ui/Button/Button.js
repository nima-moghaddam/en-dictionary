import './Button.scss'

const Button = ({name, onClickHandler, classes}) => {
  return (
      <button className={`button-ui ${classes}`} onClick={onClickHandler}>{name}</button>
  )
}

export default Button