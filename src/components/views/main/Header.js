import Logo from "../../small/Logo"

const Header = () => {
  return (
    <header className="header-container">
        <div className="header-logo-container">
          <Logo />
        </div>
        <div className="header-search-container">
          <i className="fa-solid fa-magnifying-glass fa-2xl"></i>
          <input type="text" placeholder="Search for something..." />
        </div>
        <nav className="header-navbar-container">
          <i className="fa-solid fa-comment-dots fa-2xl" />
          <i className="fa-solid fa-circle-exclamation fa-2xl" />
          <i className="fa-solid fa-gear fa-2xl" />
        </nav>
    </header>
  )
}

export default Header
