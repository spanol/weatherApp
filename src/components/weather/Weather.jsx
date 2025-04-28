import dateBuilder from "../../utils/DateBuilder";
import { IoIosRefresh } from "react-icons/io";

const WeatherComponent = ({ weatherData }) => {
  const { name, main, sys, weather } = weatherData;

  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-lg p-6 text-white max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">
          {name}, {sys.country}
        </h1>
        <a
          href="/"
          className="hover:rotate-180 transition-transform duration-500"
        >
          <IoIosRefresh className="text-2xl refresh" />
        </a>
      </div>

      <div className="text-gray-200 mb-6">{dateBuilder(new Date())}</div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h3 className="text-5xl font-bold">{Math.round(main.feels_like)}°C</h3>
        <div className="text-center">
          <p className="text-xl capitalize">{weather[0].description}</p>
          <p className="text-lg">
            {Math.round(main.temp_min)}°C / {Math.round(main.temp_max)}°C
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        {weather.map(({ description, icon, idx }) => (
          <div className="flex flex-col items-center mb-4" key={idx}>
            <img
              className="w-20 h-20"
              src={`https://openweathermap.org/img/w/${icon}.png`}
              alt="weather icon"
            />
            <p className="text-lg capitalize">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherComponent;
