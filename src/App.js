import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AboutSport from "./components/AboutSport/AboutSport";
import ActiveMenu from "./components/ActiveMenu/ActiveMenu";
// import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="app-container">
      <div className="app-container__left-side">
        <Header />
        <AboutSport />
      </div>
      <div className="app-container__right-side">
        <ActiveMenu />
      </div>
    </div>
  );
};

export default App;
