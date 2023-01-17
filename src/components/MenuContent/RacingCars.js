import React, { useState } from "react";
import "./MenuContentStyles.css";
import { CrossCars } from "../../constants/constants";
import { ModalMenuButton, MenuModalStyles } from "../../constants/constants";
import CarMenuModal from "../MenuModal/CarMenuModal";
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
        {CrossCars.map((car) => {
          return (
            <div>
              < ModalMenuButton onClick={handleOpen} key={car}>
                {car}
              </ ModalMenuButton>
            </div>
          );
        })}
      </div>

      <Modal open={isOpen} onClose={handleClose} closeAfterTransition>
        <Fade in={isOpen}>
          <Box sx={MenuModalStyles}>
            <CarMenuModal />
            <button onClick={handleClose}>CLOSE</button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default RacingCars;
