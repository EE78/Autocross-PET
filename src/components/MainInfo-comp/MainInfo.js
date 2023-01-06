import React, { useState } from "react";
import "./MainInfo.css";
import { Button } from "@mui/material";
import events from "../../database/events";
function MainInfo() {
  const [showLocation, setShowLocation] = useState(" 4214");
  const [showStatus, setShowStatus] = useState(" qe1232");

  return (
    <div>
      <div className="table">
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            setShowLocation(events.nsk.location);
            setShowStatus(events.nsk.status);
          }}
        >
          Погоняем?
        </Button>
        <div className="events-list">
          <div className="list__item">
            <p>{showLocation}</p>
            <p>{showStatus}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainInfo;
