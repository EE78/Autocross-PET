import { RacingCarsDB } from "./RacingCarsDB";
import React, { useState } from "react";
import { ImageCarousel } from "../../shared/Ui/ImageCarousel/ImageCarousel";
import { CarInfo } from "../../shared/CarInfoAndTrackInfo/CarInfo";
import { ModalStyles } from "../../shared/Ui/ButtonAndModalStyles/ModalStyles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import {
  RacingCarsCollection,
  CollectionButton,
  RacingCarsTitle,
  CarModalTitle,
} from "./StyledRacingCars";


const RacingCars = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [carHp, setCarHp] = useState("");
  const [carType, setCarType] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const [isActive, setIsActive] = useState("");

  const СhooseCar = RacingCarsDB.map((car) => {
    const showActiveCarInfo = () => {
      setIsOpen(true);
      setCarHp(car.hp);
      setCarType(car.type);
      setCarPrice(car.price);
      setIsActive(car.class);
    };

    return (
      <CollectionButton onClick={showActiveCarInfo} key={car}>
        {car.class}
      </CollectionButton>
    );
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <RacingCarsTitle>КЛАССЫ КРОССОВЫХ АВТО</RacingCarsTitle>
      <ImageCarousel />
      <RacingCarsCollection>{СhooseCar}</RacingCarsCollection>
      <Modal open={isOpen} onClose={handleClose} closeAfterTransition>
        <Fade in={isOpen}>
          <Box sx={ModalStyles}>
            <CarModalTitle>{isActive}</CarModalTitle>
            <CarInfo
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

export { RacingCars };
