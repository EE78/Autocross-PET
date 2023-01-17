import React, { useState } from "react";
import "./MenuContentStyles.css";
import { RacesCities } from "../../constants/constants";
import { ModalMenuButton, MenuModalStyles } from "../../constants/constants";
import CityMenuModal from "../MenuModal/CityMenuModal";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

function RacingCars() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <div className="menu-content__styles">
        {RacesCities.map((city) => {
          return (
            <div>
              <ModalMenuButton onClick={handleOpen} key={city}>
                {city}
              </ModalMenuButton>
            </div>
          );
        })}
      </div>

      <Modal open={isOpen} onClose={handleClose} closeAfterTransition>
        <Fade in={isOpen}>
          <Box sx={MenuModalStyles}>
            <CityMenuModal />
            <button onClick={handleClose}>CLOSE</button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default RacingCars;
