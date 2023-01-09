import React from "react";
import "./menuStyles.css";
import { Button } from "@mui/material";

function Menu() {
  return (
    <div className="menu__buttons">
      <div>
        <Button variant="contained" size="large">
          КАКИЕ МАШИНЫ?
        </Button>
        <p>TEXT EXAMPLE</p>
      </div>
      <div>
        <Button variant="contained" size="large">
          ГДЕ БУДУТ ГОНКИ?
        </Button>
        <p>TEXT EXAMPLE</p>
      </div>
      <div>
        <Button variant="contained" size="large">
          ЧТО ПОЧИТАТЬ?
        </Button>
        <p>TEXT EXAMPLE</p>
      </div>
      <div>
        <Button variant="contained" size="large">
          ПОСМОТРЕТЬ ФОТКИ
        </Button>
        <p>TEXT EXAMPLE</p>
      </div>
    </div>
  );
}

export default Menu;
