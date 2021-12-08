import React from "react";
import logo from "../../../assets/images/logo.png";

const Header = () => {
  return (
    <header className="c-header">
      <a href="/" className="c-logo" rel="home">
        <img
          data-testid="header-logo"
          className="c-logo__img"
          src={logo}
          alt="logo"
        />
      </a>
      <h2>Formula 1 Champions</h2>
    </header>
  );
};

export default Header;
