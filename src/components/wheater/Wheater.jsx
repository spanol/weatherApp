import { dateBuilder, dayBuilder } from "../DateBuilder";
const Wheater = ({ wheater, forecast }) => {
  // salvar pesquisa no localstorage
  return (
    <>
      <div className="city">
        {/* <p>Weather now in</p> */}
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

      <div className="flex forecast">
        {forecast &&
          forecast?.list?.slice(0, 3).map(({ dt_txt, main, weather }) => (
            <div>
              {weather.map(({ icon }) => (
                <img
                  src={`https://openweathermap.org/img/w/${icon}.png`}
                  alt="weather icon"
                />
              ))}
              <p>{dt_txt}</p>
              <p>
                {Math.round(main.temp_min)}C° - {Math.round(main.temp_max)}C°
              </p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Wheater;
