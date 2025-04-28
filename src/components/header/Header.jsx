import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useWeather } from "../../Context/WeatherContext";
import { notify, notifyError } from "../toasts/toasts";
import { getCurrentWeather } from "../../api/weatherApi";
import getWeatherBackground from "../../utils/getWeatherBackground";

const Header = () => {
  const { weatherData, setWeatherData } = useWeather();
  const [search, setSearch] = useState();

  const getData = async (SearchedCity) => {
    const response = await getCurrentWeather(SearchedCity);
    if (response && response.cod === 200) {
      setWeatherData(response);
      document.body.classList.add(getWeatherBackground(weatherData));
    } else {
      notifyError();
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (search.trim() === "") return;
    getData(search);
  };

  const checkTemperature = weatherData?.main.feels_like > 20 ? "warm" : "cold";

  useEffect(() => {
    if (weatherData != null) {
      notify();
    }
  }, [weatherData]);

  useEffect(() => {
    const LastSearchedCity = localStorage.getItem("LastSearchedCity");
    if (LastSearchedCity) {
      getData(LastSearchedCity);
    }
  }, []);

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur-sm bg-white/30 shadow-sm
    transition-all duration-300 ease-in-out
    "
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <svg
              className="w-8 h-8 text-blue-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <h1 className="text-xl font-bold text-gray-800">WeatherApp</h1>
          </div>

          <form className="relative w-full max-w-md" onSubmit={handleOnSubmit}>
            <input
              value={search}
              className="w-full py-3 px-5 pr-12 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent shadow-sm transition-all duration-200 bg-white/80"
              type="text"
              placeholder="Search for a city..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 transition-colors"
              type="submit"
              aria-label="Search"
            >
              <AiOutlineSearch className="w-5 h-5" />
            </button>
          </form>

          {weatherData && (
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-600">
                {weatherData.name}, {weatherData.sys.country}
              </span>
              <span className="text-sm font-bold">
                {Math.round(weatherData.main.temp)}°C
              </span>
            </div>
          )}
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} newestOnTop />
    </header>
  );
};

export default Header;
