import React, { useState } from "react";
import "./MainInfo.css";
import { Button } from "@mui/material";

function MainInfo() {
  const [showEvents, setShowEvents] = useState(" ");

  return (
    <div>
      <div className="button">
        <Button
          onClick={() => {
            setShowEvents("Sdfgdfgdfg");
          }}
          variant="contained"
          size="large"
        >
          LET`S RACE
        </Button>
        <div className="events-list">
          <p className="events"> {showEvents} </p>
          <p className="events"> {showEvents} </p>
          <p className="events"> {showEvents} </p>
          <p className="events"> {showEvents} </p>
        </div>
      </div>
    </div>
  );
}

export default MainInfo;
