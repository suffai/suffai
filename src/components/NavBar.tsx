// import React, { useState, useEffect } from "react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../assets/css/navbar.css";
import logoPink from "../assets/images/suff-ai-logo-nobg-pink.png";
import UserNameMenu from "./UserNameMenu";

// interface NavBarProps {
//   toggleRegister: () => void;
// }

// function NavBar({ toggleRegister }: NavBarProps) {
function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    localStorage.getItem("isAuthenticated") === "true"
  );

  // Listen for changes in the localStorage authentication status
  useEffect(() => {
    const handleAuthChange = () => {
      setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true");
    };

    if (window.innerWidth <= 990) {
      setIsMenuOpen(false);
    }

    window.addEventListener("authChange", handleAuthChange);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("authChange", handleAuthChange);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const menu = document.getElementById("mainHeader");
    const hamburgerButton = document.querySelector(".hamburger-btn");

    if (
      menu &&
      hamburgerButton &&
      !menu.contains(event.target as Node) &&
      !hamburgerButton.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  const handleMenuLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="main-header" id="mainHeader">
        <div className="header-container">
          <div className="header-logo">
            <Link className="logo-link" to="/">
              <img src={logoPink} alt="Main Logo" />
            </Link>
          </div>

          <nav
            className={`header-navigation ${
              isMenuOpen ? "mobile-navigation" : ""
            }`}
          >
            <div className="hamburger-btn-close" onClick={toggleMenu}>
              <svg
                id="hamburgerMenuClose"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="12"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </div>
            <ul className="navigation-menu">
              <li>
                <NavLink
                  className="menu-link"
                  to="/"
                  onClick={handleMenuLinkClick}
                >
                  Home
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  className="menu-link"
                  to="/about"
                  onClick={handleMenuLinkClick}
                >
                  About
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  className="menu-link nav-link-placeOrder"
                  to="/placeorder/explore-stores"
                  onClick={handleMenuLinkClick}
                >
                  Place Order
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  className="menu-link"
                  to="/partner"
                  onClick={handleMenuLinkClick}
                >
                  Partner with Us
                </NavLink>
              </li> */}
              {/* <li>
                <Link
                  className="menu-link"
                  target="_blank"
                  to="https://api.whatsapp.com/message/HTHLWMH5K6CWG1?autoload=1&app_absent=0"
                  onClick={handleMenuLinkClick}
                >
                  Contact Us
                </Link>
              </li> */}
            </ul>
            <div className="header-btn-container flex flex-row items-center">
              {isAuthenticated ? (
                <UserNameMenu />
              ) : (
                <div>
                  <Link to="/login" className="header-btn" id="headerLoginBtn">
                    Log In
                  </Link>
                  <Link to="/register" className="header-btn" id="headerRegBtn">
                    Register
                  </Link>
                </div>
              )}
            </div>
            <ul className="navigation-menu">
              <li>
                <Link
                  className="menu-link"
                  target="_blank"
                  to="https://api.whatsapp.com/message/HTHLWMH5K6CWG1?autoload=1&app_absent=0"
                  onClick={handleMenuLinkClick}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mobile-menu">
            <ul className="mobile-navigation-menu">
              <li>
                <NavLink
                  className="menu-link nav-link-placeOrder"
                  to="/placeorder"
                  onClick={handleMenuLinkClick}
                >
                  Place Order
                </NavLink>
              </li>
            </ul>
            <div className="header-btn-container">
              {/* <button
                className="header-btn"
                id="headerRegBtnMob"
                onClick={toggleRegister}
              >
                Discounts
              </button> */}
            </div>
          </div>

          <div className="hamburger-btn" onClick={toggleMenu}>
            <svg
              id="hamburgerMenuOpen"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 15 13"
            >
              <path d="M6.99317 2.66914C4.98572 2.66914 2.97828 2.66914 0.966932 2.66914C0.405627 2.66914 -0.0114539 2.25206 0.000239919 1.70635C0.0119338 1.2308 0.401729 0.829311 0.881177 0.802025C0.920157 0.798127 0.959136 0.802025 0.998116 0.802025C5.00521 0.802025 9.01231 0.802025 13.0194 0.802025C13.5105 0.802025 13.8847 1.08268 13.9861 1.52704C14.1186 2.10784 13.6937 2.65745 13.0935 2.66914C12.6413 2.67694 12.1891 2.66914 11.737 2.66914C10.1544 2.66914 8.57574 2.66914 6.99317 2.66914Z" />
              <path d="M7.01243 5.47168C9.01987 5.47168 11.0273 5.47168 13.0387 5.47168C13.6039 5.47168 14.0248 5.88486 14.0131 6.43058C14.0015 6.91002 13.6156 7.31151 13.1361 7.3388C13.0971 7.3427 13.0582 7.3388 13.0192 7.3388C9.01207 7.3388 5.00498 7.3388 0.997885 7.3388C0.498947 7.3388 0.124743 7.05425 0.0272946 6.60598C-0.0974399 6.03298 0.327437 5.48727 0.916028 5.47558C1.25125 5.46778 1.58648 5.47558 1.9217 5.47558C3.61731 5.47168 5.31292 5.47168 7.01243 5.47168Z" />
              <path d="M7.00867 12.0087C4.99733 12.0087 2.98209 12.0087 0.970743 12.0087C0.409438 12.0087 -0.0115409 11.5877 0.00405093 11.0459C0.0157448 10.5743 0.397744 10.1767 0.873294 10.1455C0.908376 10.1416 0.93956 10.1416 0.974641 10.1416C4.99733 10.1416 9.01612 10.1416 13.0388 10.1416C13.5027 10.1416 13.8769 10.4184 13.9821 10.8393C14.1302 11.4279 13.7015 12.0009 13.0934 12.0087C12.536 12.0165 11.9747 12.0126 11.4173 12.0126C9.94383 12.0087 8.4743 12.0087 7.00867 12.0087Z" />
            </svg>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
