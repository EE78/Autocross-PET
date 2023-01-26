import React from "react";
import "./ActiveMenuImagesStyles.css";
import rkrlogo from "./images/rkrlogo.png";

export const ActiveMenuImages = () => {
  return (
    <div className="active-menu-images__wrapper">
      <img src={rkrlogo} alt=""></img>
      <img src={rkrlogo} alt=""></img>
    </div>
  );
};
