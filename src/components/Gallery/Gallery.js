import React from "react";
import "./GalleryStyles.css";
import rkrlogo from "./images/rkrlogo.png";
import { ImageCarousel } from "../../shared/Ui/ImageCarousel";

export const Gallery = ({ handleClose }) => {
  return (
    <div className="gallery__wrapper">
      <ImageCarousel src={rkrlogo} />
      <div className="gallery-wrapper__button">
        <button onClick={handleClose}>ЗАКРЫТЬ ГАЛЕРЕЮ</button>{" "}
      </div>
    </div>
  );
};
