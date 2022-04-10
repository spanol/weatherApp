import { dateBuilder, dayBuilder } from "../DateBuilder";
const Wheater = ({ wheater, forecast }) => {
  const backgroundMaker = (description) => {
    switch (description) {
      case "overcast clouds":
        return "https://images.unsplash.com/photo-1525920980995-f8a382bf42c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3ZlcmNhc3QlMjBza3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
      case "few clouds":
        return "few-clouds";
      case "scattered clouds":
        return "scattered-clouds";
      case "broken clouds":
        return "broken-clouds";
      case "clear sky":
        return "clear-sky";
      case "light rain":
        return "light-rain";
      case "shower rain":
        return "shower-rain";
      case "rain":
        return "rain";
      case "thunderstorm":
        return "thunderstorm";
      case "snow":
        return "snow";
      case "mist":
        return "mist";
    }
  };
  // salvar pesquisa no localstorage
  return (
    <>
      {/* <div className={wheater.main.feels_like > 25 ? "container warm" : "container cold"}> */}
        <div className="city">
          <p>Weather now in</p>
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
                    alt=""
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
