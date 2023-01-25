import React from "react";
import "./App.css";
import TextContent from "./components/TextContent/TextContent";
import ActiveMenu from "./components/ActiveMenu/ActiveMenu";

const App = () => {
  return (
    <div className="app-container">
      <TextContent />
      <ActiveMenu />
    </div>
  )
};

export default App;
