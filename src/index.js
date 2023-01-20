import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header/Header";
import AboutSport from "./components/AboutSport/AboutSport";
import ActiveMenu from "./components/ActiveMenu/ActiveMenu";
import Footer from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="app-container">
      <Header />
      <AboutSport />
      <ActiveMenu />
      <Footer />
    </div>
  </React.StrictMode>
);
