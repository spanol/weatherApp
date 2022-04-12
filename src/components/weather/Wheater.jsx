import dateBuilder from "../../utils/DateBuilder";
import { IoIosRefresh } from 'react-icons/io';
const WeatherComponent = ({ weatherData }) => {
  const { name, main, sys, weather } = weatherData;

  return (
    <>
      <div className="city">
        {name}, {sys.country}
        <a href="/"><IoIosRefresh className="refresh" /></a>
      </div>

      <div className="date">{dateBuilder(new Date())}</div>
      <div className="flex temp">
        <h3>{Math.round(main.feels_like)}C°</h3>
        <h2>{weather.description}</h2>
        <hr className="divisor" />
      </div>

      {weather.map(({ description, main, icon }) => (
        <div className="description" key="div">
          <p>{description}</p>
          <img
            className="icon"
            src={`https://openweathermap.org/img/w/${icon}.png`}
            alt="icon"
          />
          <p>
            {Math.round(weatherData.main.temp_min)}C° /{" "}
            {Math.round(weatherData.main.temp_max)}C°
          </p>
        </div>
      ))}
    </>
  );
};

export default WeatherComponent;
