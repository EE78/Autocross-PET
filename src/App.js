import React from "react";
import "./App.css";
// import { MainContent } from "./components/MainContent/MainContent";
import { Start } from "./new-components/StartPage/StartPage";
import { Footer } from "./new-components/Footer/Footer";

const App = () => {
  return (
    <div className="app-container">
      <Start />
      <Footer />
    </div>
  );
};

export default App;
