import React, { useState } from "react";
import "./ContentStyles.css";
import rkrlogo from "./Images/rkrlogo.png";
import { RacesCities } from "./ContentDB";
import { MenuModalStyles } from "../../Shared/Ui/ContentModalStyles";
import { ModalMenuButton } from "../../Shared/Ui/ContentButtonStyles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

// ВЫНЕСТИ В INDEX.JS ДЛЯ РЕЭКСПОРТА

const ContentTracks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [raceStatus, setRaceStatus] = useState("");
  const [raceResults, setRaceResults] = useState("");
  const [raceStages, setRaceStages] = useState("");

  return (
    <div>
      <div className="active-menu__content">
        {RacesCities.map((place) => {
          return (
            <div>
              <ModalMenuButton
                onClick={() => {
                  setIsOpen(true);
                  setRaceStatus(place.status);
                  setRaceResults(place.results);
                  setRaceStages(place.stages);
                }}
                key={place}
              >
                {place.city}
              </ModalMenuButton>
            </div>
          );
        })}
      </div>

      <Modal
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        closeAfterTransition
      >
        <Fade in={isOpen}>
          <Box sx={MenuModalStyles}>
            {/* ВЫНЕСТИ В SHARED/UI */}
            <div className="active-menu__modal">
              <img src={rkrlogo} alt=" "></img>
              <div className="modal__info">
                <div className="info__element">
                  <h1 className="element__name">СТАТУС ГОНКИ:</h1>
                  <p className="element__value">{raceStatus}</p>
                </div>
                <div className="info__element">
                  <h1 className="element__name">РЕЗУЛЬТАТЫ ГОНКИ:</h1>
                  <p className="element__value">{raceResults}</p>
                </div>
                <div className="info__element">
                  <h1 className="element__name">ЭТАПОВ ВСЕГО</h1>
                  <p className="element__value">{raceStages}</p>
                </div>
              </div>
              <ModalMenuButton
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                ВЕРНУТЬСЯ К СПИСКУ ГОНОЧНЫХ ТРЕКОВ
              </ModalMenuButton>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ContentTracks;
