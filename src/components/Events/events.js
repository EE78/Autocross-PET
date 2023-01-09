import React, { useState } from "react";
import "./eventsStyles.css";
import { Button } from "@mui/material";
import cities from "../../database/events";

function Events() {
  const [showСity, setShowCity] = useState();

  return (
    <div>
      <div className="table">
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            setShowCity(
              cities.find((city) => {
                return city === "Томск";
              })
            );
          }}
        >
          Погоняем?
        </Button>
        <div className="events-list">
          <div className="list__item">
            <p>{showСity}</p>
            <Button variant="contained" size="large"> Когда гонка? </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
