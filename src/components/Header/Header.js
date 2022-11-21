import "./header.css"


const Header = () => {
  return (
      <header class="header">
      <div className="header__logo">
        <img src="img/logo.png" alt="" />
      </div>
      <div className="header__search">
      <input type="text" id="search" placeholder="Поиск"/>
      <img src="icons/search.svg" alt="Icon_search" />
      </div>
      </header>
  )
}
export default Header;