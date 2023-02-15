import React from "react";
import "./App.css";
// import { MainContent } from "./components/MainContent/MainContent";
import { Start } from "./new-components/StartPage/StartPage";
import { Footer } from "./new-components/Footer/Footer";
import { AboutCross } from "./new-components/AboutCross/AboutCross";
import { RacingCars } from "./new-components/RacingCars/RacingCars";

const App = () => {
  return (
    <div className="app-container">
      <Start />
      <AboutCross />
      <RacingCars />
      <Footer />
    </div>
  );
};

export default App;
