import { RacingTracksDB } from "./RacingTracksDB";
import React, { useState } from "react";
import { TrackInfo } from "../../shared/CarInfoAndTrackInfo/TrackInfo";
import { ModalStyles } from "../../shared/Ui/ButtonAndModalStyles/ModalStyles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Footer } from "../Footer/Footer";
import {
  RacingTracksCollection,
  CollectionButton,
  RacingTracksTitle,
  TracksModalTitle,
} from "./StyledRacingTracks";

const RacingTracks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [raceStatus, setRaceStatus] = useState("");
  const [raceResults, setRaceResults] = useState("");
  const [raceStages, setRaceStages] = useState("");
  const [isActive, setIsActive] = useState("");

  const ChooseTrack = RacingTracksDB.map((place) => {
    const showActiveTrackInfo = () => {
      setIsOpen(true);
      setRaceStatus(place.status);
      setRaceResults(place.results);
      setRaceStages(place.stages);
      setIsActive(place.city);
    };

    return (
      <div>
        <CollectionButton onClick={showActiveTrackInfo} key={place}>
          {place.city}
        </CollectionButton>
      </div>
    );
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="app-container">
      <RacingTracksTitle>Гоночные треки</RacingTracksTitle>
      <RacingTracksCollection>{ChooseTrack}</RacingTracksCollection>
      <Modal open={isOpen} onClose={handleClose} closeAfterTransition>
        <Fade in={isOpen}>
          <Box sx={ModalStyles}>
            <TracksModalTitle>{isActive}</TracksModalTitle>
            <TrackInfo
              raceStatus={raceStatus}
              raceResults={raceResults}
              raceStages={raceStages}
              handleClose={handleClose}
              textButton={"К СПИСКУ ГОРОДОВ"}
            />
          </Box>
        </Fade>
      </Modal>
      <Footer />
    </div>
  );
};

export { RacingTracks };
