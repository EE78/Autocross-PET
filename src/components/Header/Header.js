import React from "react";
import rkrlogo from "./HeaderImages/rkrlogo.png";
import "./HeaderStyles.css";

const Header = () => {
  return (
    <div className="header__box">
      <img alt="Logo" src={rkrlogo} />
      <h1 className="title__caption">СИБИРСКИЙ АВТОКРОСС</h1>
    </div>
  );
};

export default Header;
