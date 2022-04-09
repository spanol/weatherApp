import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Wheater from "./components/wheater/Wheater";
import WheaterProvider from "./Context/WheaterContext";
import WheaterContainer from "./components/wheater/WheaterContainer";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <WheaterProvider>
      <div className="App">
        <Header />
        <WheaterContainer />
        <Footer/>
      </div>
    </WheaterProvider>
  );
}

export default App;
