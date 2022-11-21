import "./header.css";

import ButtonGroup from "./ButtonGroup";

const Header = () => {
  return (
    <header>
      <div className="logo"></div>
      <div className="buttons">
        <ButtonGroup />
      </div>
      <div className="search"></div>
    </header>
  )
}
export default Header;