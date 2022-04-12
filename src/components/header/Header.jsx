import axios from "axios";
import {  useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import {
  useSearch,
  useWeather,
  useBackground,
  useForecast,
} from "../../Context/WeatherContext";
import { notify, notifyError } from "../toasts/toasts";

const Header = () => {
  const { search, setSearch } = useSearch();
  const { background, setBackground } = useBackground();
  const { weatherData, setWeatherData } = useWeather();
  const { forecast } = useForecast();


  const GetWheater = (SearchedCity) => {
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${SearchedCity}&units=metric&APPID=b1502fce42dd4c060eb30b394654bc1d`;
    axios
      .get(baseURL)
      .then((data) => {
        setWeatherData(data.data);
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
        notifyError();
      });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // localStorage.setItem("LastSearchedCity", search);
    GetWheater(search);
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

  useEffect(() => {
    if (weatherData != null) {
      notify();
    }
  }, [weatherData]);

  return (
    <nav
      style={{ backgroundColor: background }}
      className="flex pagecontainer header"
    >
      <form className="flex form" onSubmit={handleOnSubmit}>
        <input
          value={search}
          className="input "
          type="text"
          placeholder="Search for place..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-icon" type="submit">
          <AiOutlineSearch />
        </button>
      </form>
      <ToastContainer/>
    </nav>
  );
};

export default Header;
