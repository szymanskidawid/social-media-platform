import Logo from "./Logo"

const Header = () => {
  return (
    <header className="header-container">
        <div className="header-logo-container">
            <Logo />
        </div>
        <div className="header-navbar-container">
            <nav className="header-navbar-buttons">
                <p>Chat</p>
                <p>Notification</p>
                <p>Options</p>
            </nav>
        </div>
    </header>
  )
}

export default Header
