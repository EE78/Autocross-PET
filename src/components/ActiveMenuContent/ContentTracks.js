import React, { useState } from "react";
import "./ActiveMenuContentStyles.css";
import rkrlogo from "./ActiveMenuContentImages/rkrlogo.png";
import { RacesCities } from "../../constants/constants";
import { ModalMenuButton, MenuModalStyles } from "../../constants/constants";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

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
            <div className="active-menu__modal">
              <img src={rkrlogo} alt=" "></img>
              <div className="modal__info">
                <div className="info__element">
                  <h1 className="element__name">СТАТУС ГОНКИ:</h1>
                  <p className="element__value">{raceStatus}</p>
                </div>
                <div className="text__element">
                  <h1 className="element__name">РЕЗУЛЬТАТЫ ГОНКИ:</h1>
                  <p className="element__value">{raceResults}</p>
                </div>
                <div className="text__element">
                  <h1 className="element__name">ЭТАПОВ ВСЕГО</h1>
                  <p className="element__value">{raceStages}</p>
                </div>
              </div>
              <ModalMenuButton
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                ПОНЯТНО ПРО ГОНКИ
              </ModalMenuButton>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ContentTracks;
