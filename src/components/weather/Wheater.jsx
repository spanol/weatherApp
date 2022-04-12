import { dateBuilder } from "../DateBuilder";
const WeatherComponent = ({ wheater }) => {
  // salvar pesquisa no localstorage
  return (
    <>
      <div className="city">
        {wheater.name}, {wheater.sys.country}
      </div>

      <div className="date">{dateBuilder(new Date())}</div>
      <div className="flex temp">
        <h3>{Math.round(wheater.main.feels_like)}C°</h3>
        <h2>{wheater.weather.description}</h2>
        <hr className="divisor" />
      </div>

      {wheater.weather.map(({ description, main, icon }) => (
        <div className="description">
          <p>{description}</p>
          <img
            className="icon"
            src={`https://openweathermap.org/img/w/${icon}.png`}
          />
          <p>
            {Math.round(wheater.main.temp_min)}C° /{" "}
            {Math.round(wheater.main.temp_max)}C°
          </p>
        </div>
      ))}
    </>
  );
};

export default WeatherComponent;
