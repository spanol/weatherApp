import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  useSearch,
  useWeather,
  useBackground,
  useForecast,
} from "../Context/WeatherContext";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const { search, setSearch } = useSearch();
  const { background, setBackground } = useBackground();
  const { weatherData, setWeatherData } = useWeather();
  const { forecast } = useForecast();

  const notify = () => toast("Loading...");

  const GetWheater = (SearchedCity) => {
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${SearchedCity}&units=metric&APPID=b1502fce42dd4c060eb30b394654bc1d`;
    axios
      .get(baseURL)
      .then((data) => {
        setWeatherData(data.data);
        console.log(data.data);
      })
      .catch((err) => console.log(err));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(search);
    localStorage.setItem("LastSearchedCity", search);
    GetWheater(search);
    notify();
  };

  // useEffect(() => {
  //   const LastSearchedCity = localStorage.getItem("LastSearchedCity");
  //   if (LastSearchedCity) {
  //     GetWheater(LastSearchedCity);
  //   }
  // }, []);

  const checkTemperature =
  weatherData?.main.feels_like > 23 ? "#7d2c78" : "#c5e6fd";

  useEffect(() => {
    if (forecast != null) {
      setBackground(checkTemperature);
    }
  });

  return (
    <nav
      style={{ backgroundColor: background }}
      className="flex pagecontainer header"
    >
      <a className="link" href="/">
      <img
        className="logo"
        src={
          "https://cdn.iconscout.com/icon/free/png-256/weather-2191838-1846632.png"
        }
        alt="logo"
      />
      </a>
      <form className="flex  form" onSubmit={handleOnSubmit}>
        <input
          value={search}
          className="input "
          type="text"
          placeholder="Search for place..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <i class="fa-solid fa-magnifying-glass"></i>
      </form>
      {/* <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      /> */}
    </nav>
  );
};

export default Header;
