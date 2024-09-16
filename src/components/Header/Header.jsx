import React from "react";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
