import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AboutSport from "./components/AboutSport/AboutSport";
import ActiveMenu from "./components/ActiveMenu/ActiveMenu";

const App = () => {
  return (
    <div className="app-container">
      <div className="app-container__left-side">
        <Header />
        <AboutSport />
      </div>
      <div className="app-container__right-side">
        <div >
          <ActiveMenu />
        </div>
      </div>
    </div>
  );
};

export default App;