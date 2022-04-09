import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Wheater from "./components/wheater/Wheater";
import WheaterProvider from "./Context/WheaterContext";
import WheaterContainer from "./components/wheater/WheaterContainer";
function App() {
  return (
    <WheaterProvider>
      <div className="App">
        <Header />
        <WheaterContainer />
      </div>
    </WheaterProvider>
  );
}

export default App;
