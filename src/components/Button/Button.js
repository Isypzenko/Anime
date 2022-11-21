import "./Button.css";

const Button = ({ children, className, ...atr }) => {

  return (
    <button className={`button ${className}`} {...atr}>
      {children}
    </button>
  )
}

export default Button;