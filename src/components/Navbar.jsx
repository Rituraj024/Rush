import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar= () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className="container">
      <img width={208} height={80} src="/Logo.png"></img>
        <div className="navbar">
          <nav className={showMenu ? "menu-mobile" : "menu-web"}>
            <ul className="menu">
              <li>
                <a className="menu" href="#">Home</a>
              </li>
              <li>
                <a className="menu" href="#services">Service</a>
              </li>
              <li>
                <a className="menu" href="#differentiator">Differentiator</a>
              </li>
              <li>
                <a className="menu" href="#">Performance</a>
              </li>
              <li>
                <a className="menu" href="#federal">Federeal Resources</a>
              </li>
              <li>
                <a className="menu" href="#">Contact us</a>
              </li>
            </ul>
            <hr />
          </nav>
          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};