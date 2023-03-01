import React from "react";
import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { AboutCross } from "./new-components/AboutCross/AboutCross";
import { RacingCars } from "./new-components/RacingCars/RacingCars";
import { RacingTracks } from "./new-components/RacingTracks/RacingTracks";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <AboutCross />,
  },
  {
    path: "/cars",
    element: <RacingCars />,
  },
  {
    path: "/tracks",
    element: <RacingTracks />,
  },
]);
