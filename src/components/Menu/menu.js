import React, { useState } from "react";
import "./menuStyles.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

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

function Menu() {
  const [showCars, setShowCars] = useState(false);
  const [showTracks, setShowTracks] = useState(false);
  const [showDocs, setShowDocs] = useState(false);

  return (
    <div className="menu__buttons">
      {/* <div>
        <Button
          className="button"
          variant="outlined"
          size="large"
          onClick={() => {
            setShowCars(!showCars);
          }}
        >
          {!showCars ? "НА КАКИХ МАШИНАХ ГОНЯЮТ? " : "ПРО МАШИНЫ ПОНЯТНО"}
        </Button>
        <div className="test"> {showCars ? <MenuContent /> : null} </div>
      </div> */}

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={cars}
        sx={{
          width: 300,
          p: 1,
          input: { color: "black" },
          label: { color: "black" },
        }}
        renderInput={(params) => (
          <TextField {...params} label="НА КАКИХ МАШИНАХ ГОНЯЮТ?" />
        )}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={city}
        sx={{
          width: 300,
          p: 1,
          input: { color: "black" },
          label: { color: "black" },
        }}
        renderInput={(params) => (
          <TextField {...params} label="НА КАКИХ ТРАССАХ ГОНЯЮТ?" />
        )}
      />

      {/* <div>
        <Button
          className="button"
          variant="outlined"
          size="large"
          onClick={() => {
            setShowTracks(!showTracks);
          }}
        >
          {!showTracks ? "НА КАКИХ ТРАССАХ ГОНЯЮТ? " : "ПРО ТРАССЫ ПОНЯТНО"}
        </Button>
        <div className="test"> {showTracks ? <MenuContent /> : null} </div>
      </div>
      <div>
        <Button
          className="button"
          variant="outlined"
          size="large"
          onClick={() => {
            setShowDocs(!showDocs);
          }}
        >
          {!showDocs ? "ЧТО ЕЩЕ ИНТЕРЕСНОГО? " : "ПРО ИНТЕРЕСНОЕ ПОНЯТНО"}
        </Button>
        <div className="test"> {showDocs ? <MenuContent /> : null} </div>
      </div> */}
    </div>
  );
}

export default Menu;
