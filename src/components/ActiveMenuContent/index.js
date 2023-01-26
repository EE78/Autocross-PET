import React, { useState } from "react";
import "./ActiveMenuContentStyles.css";
import { CrossCars } from "./ActiveMenuContentDB";
import { ModalStyles } from "../../shared/Ui/ButtonAndModalStyles/ModalStyles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import rkrlogo from "./images/rkrlogo.png";
import { RacesCities } from "./ActiveMenuContentDB";
import { CarInfo } from "../../shared/CarInfoAndTrackInfo/CarInfo";
import { TrackInfo } from "../../shared/CarInfoAndTrackInfo/TrackInfo";

const Cars = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [carHp, setCarHp] = useState("");
  const [carType, setCarType] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const [isActive, setIsActive] = useState("");

  const СhooseCar = CrossCars.map((car) => {
    const showActiveCarInfo = () => {
      setIsOpen(true);
      setCarHp(car.hp);
      setCarType(car.type);
      setCarPrice(car.price);
      setIsActive(car.class);
    };

    return (
      <div>
        <button
          className="active-menu__opener"
          onClick={showActiveCarInfo}
          key={car}
        >
          {car.class}
        </button>
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
            <h1 className="content-buttons__active-name">{isActive}</h1>
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
  const [isActive, setIsActive] = useState("");

  const ChooseCity = RacesCities.map((place) => {
    const showActiveTrackInfo = () => {
      setIsOpen(true);
      setRaceStatus(place.status);
      setRaceResults(place.results);
      setRaceStages(place.stages);
      setIsActive(place.city);
    };

    return (
      <div>
        <button
          className="active-menu__opener"
          onClick={showActiveTrackInfo}
          key={place}
        >
          {place.city}
        </button>
      </div>
    );
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="active-menu-content__buttons">{ChooseCity}</div>
      <Modal open={isOpen} onClose={handleClose} closeAfterTransition>
        <Fade in={isOpen}>
          <Box sx={ModalStyles}>
            <h1 className="content-buttons__active-name">{isActive}</h1>
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
