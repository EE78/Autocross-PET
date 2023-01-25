import React, { useState } from "react";
import "./ContentStyles.css";
import { CrossCars } from "./ContentDB";
import { ModalStyles } from "../../shared/Ui/ButtonAndModalStyles/ModalStyles";
import { ModalButton } from "../../shared/Ui/ButtonAndModalStyles/ButtonStyles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import rkrlogo from "./images/rkrlogo.png";
import { RacesCities } from "./ContentDB";
import { CarInfo } from "../../shared/CarInfoAndTrackInfo/CarInfo";
import { TrackInfo } from "../../shared/CarInfoAndTrackInfo/TrackInfo";

const Cars = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [carHp, setCarHp] = useState("");
  const [carType, setCarType] = useState("");
  const [carPrice, setCarPrice] = useState("");

  const СhooseCar = CrossCars.map((car) => {
    const showActiveCarInfo = () => {
      setIsOpen(true);
      setCarHp(car.hp);
      setCarType(car.type);
      setCarPrice(car.price);
    };

    return (
      <div>
        <ModalButton onClick={showActiveCarInfo} key={car}>
          {car.class}
        </ModalButton>
      </div>
    );
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="active-menu-content__buttons">{СhooseCar}</div>
      <Modal open={isOpen} onClose={handleClose} closeAfterTransition>
        <Fade in={isOpen}>
          <Box sx={ModalStyles}>
            <CarInfo
              image={rkrlogo}
              carHp={carHp}
              carType={carType}
              carPrice={carPrice}
              handleClose={handleClose}
              textButton={"К СПИСКУ КЛАССОВ"}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

const Tracks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [raceStatus, setRaceStatus] = useState("");
  const [raceResults, setRaceResults] = useState("");
  const [raceStages, setRaceStages] = useState("");

  const ChooseCity = RacesCities.map((place) => {
    const showActiveTrackInfo = () => {
      setIsOpen(true);
      setRaceStatus(place.status);
      setRaceResults(place.results);
      setRaceStages(place.stages);
    };

    return (
      <div>
        <ModalButton onClick={showActiveTrackInfo} key={place}>
          {place.city}
        </ModalButton>
      </div>
    );
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div  className="active-menu-content__buttons">{ChooseCity}</div>
      <Modal open={isOpen} onClose={handleClose} closeAfterTransition>
        <Fade in={isOpen}>
          <Box sx={ModalStyles}>
            <TrackInfo
              image={rkrlogo}
              raceStatus={raceStatus}
              raceResults={raceResults}
              raceStages={raceStages}
              handleClose={handleClose}
              textButton={"К СПИСКУ ГОРОДОВ"}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export { Cars, Tracks };
