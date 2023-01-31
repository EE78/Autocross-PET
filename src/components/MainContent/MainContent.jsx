import React from "react";
import rkrlogo from "./images/rkrlogo.png";
import "./MainContentStyles.css";
import ActiveMenu from "../ActiveMenu/ActiveMenu";
import { useState } from "react";
import { AboutSport } from "../AboutSport/AboutSport";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { ModalStyles } from "../../shared/Ui/ButtonAndModalStyles/ModalStyles";
import { Gallery } from "../Gallery/Gallery";

export const MainContent = () => {
  const [showAboutSport, setShowAboutSport] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isAboutSportOpen, setIsAboutSportOpen] = useState(false);

  const handleShowAboutSport = () => {
    setShowAboutSport(true);
    setIsAboutSportOpen(true);
  };
  const handleCloseAboutSport = () => {
    setIsAboutSportOpen(false);
  };
  const handleShowGallery = () => {
    setShowGallery(true);
    setIsGalleryOpen(true);
  };
  const handleCloseGallery = () => {
    setIsGalleryOpen(false);
  };

  const GalleryButtonText = isGalleryOpen
    ? "ГАЛЕРЕЯ ОТКРЫТА"
    : "ОТКРЫТЬ ГАЛЕРЕЮ";

  return (
    <div className="main-content__wrapper">
      <div className="wrapper__text-content">
        <div className="text-content__logos">
          <img alt="Logo" src={rkrlogo} />
        </div>
        <h1>СИБИРСКИЙ АВТОКРОСС</h1>
        <p>
          Автокросс - один из самых зрелищных видов автоспорта. Широко
          распространен в Сибирском округе.
        </p>

        <button onClick={handleShowAboutSport}>
          ОТКРЫТЬ ПОДРОБНОЕ ОПИСАНИЕ
        </button>

        {showAboutSport ? (
          <Modal
            open={isAboutSportOpen}
            onClose={handleCloseAboutSport}
            closeAfterTransition
          >
            <Fade in={isAboutSportOpen}>
              <Box sx={ModalStyles}>
                <AboutSport handleClose={handleCloseAboutSport} />
              </Box>
            </Fade>
          </Modal>
        ) : null}
      </div>
      <ActiveMenu />

      <button
        className="main-content__gallery-opener"
        onClick={handleShowGallery}
      >
        {GalleryButtonText}
      </button>
      {showGallery ? (
        <Modal
          open={isGalleryOpen}
          onClose={handleCloseGallery}
          closeAfterTransition
        >
          <Fade in={isGalleryOpen}>
            <Box sx={ModalStyles}>
              <Gallery handleClose={handleCloseGallery} />
            </Box>
          </Fade>
        </Modal>
      ) : null}
    </div>
  );
};
