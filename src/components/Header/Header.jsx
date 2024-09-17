import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import Icon from "../../assets/images/icon-menu-close.svg";
import "./Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="hamburgerMenu">
        {/* Hamburger Menu  */}
        <div className="hamburgerMenu--icon" onClick={toggleMenu}>
          <div className="hamburgerMenu--icon--bar1"></div>
          <div className="hamburgerMenu--icon--bar2"></div>
          <div className="hamburgerMenu--icon--bar3"></div>
        </div>
        {/* Menu Items  */}
        {isOpen && (
          <>
            <a href="/">Home</a>
            <a href="/">New</a>
            <a href="/">Popular</a>
            <a href="/">Trending</a>
            <a href="/">Categories</a>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
