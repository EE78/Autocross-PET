import React, { useState } from "react";
import "./menuStyles.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import MenuContent from "../../MenuContent/menuContent";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const ModalButton = styled(Button)({
  color: "black",
  fontSize: 16,
  padding: "20px 15px",
  borderRadius: "10px",
  backgroundColor: "#fe6b8b",
  borderColor: "#ff8e53",
  "&:hover": {
    backgroundColor: "#ff8e53",
    borderColor: "#0062cc",
  },
});

const city = [
  "Томск",
  "Омск",
  "Новокузнецк",
  "Рубцовск",
  "Зеленогорск",
  "Красноярск",
  "Новосибирск",
  "Киселевск",
  "Полысаево",
  "Ордынское",
];

const cars = [
  "Д2Н",
  "Супер1600",
  "СуперАвто",
  "Д3-Спринт",
  "СуперБагги",
  "Д2-Классика",
  "Т1-2500",
  "Д3-Юниор",
  "Д2-Юниор",
  "Д3-Мини",
  "Д3-Микро",
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "lightblue",
  border: "2px solid #000",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

function Menu() {
  const [showCars, setShowCars] = useState(false);
  const [showTracks, setShowTracks] = useState(false);
  const [open, setOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  return (
    <div>
      <div className="menu__buttons">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={cars}
          onChange={() => {
            setShowCars(true);
            setShowButton(true);
          }}
          sx={{
            width: 300,
            p: 1,
            input: { color: "black" },
            label: { color: "black" },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={
                !showCars ? "НА КАКИХ МАШИНАХ ГОНЯЮТ? " : "ВЫБРАН КЛАСС АВТО"
              }
            />
          )}
        />

        <Autocomplete
          id="combo-box-demo"
          options={city}
          onChange={() => {
            setShowTracks(!showTracks);
            setShowButton(true);
          }}
          sx={{
            width: 300,
            p: 1,
            input: { color: "black" },
            label: { color: "black" },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={
                !showTracks ? "НА КАКИХ ТРАССАХ ГОНЯЮТ? " : "ВЫБРАНА ТРАССА"
              }
              value={showTracks}
            />
          )}
        />
      </div>

      {showButton ? (
        <div className="modal__openButton">
          <ModalButton variant="contained" onClick={() => setOpen(true)}>
            УЗНАТЬ ПОДРОБНЕЕ
          </ModalButton>
        </div>
      ) : null}

      <Modal open={open} closeAfterTransition>
        <Fade in={open}>
          <Box sx={style}>
            <div className="modal__content">
              <MenuContent />
              <ModalButton variant="contained" onClick={() => setOpen(false)}>
                УЗНАЛ ПОДРОБНЕЕ
              </ModalButton>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default Menu;
