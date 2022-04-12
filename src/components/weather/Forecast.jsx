const Forecast = ({ forecast }) => {
  return (
    <div className="flex forecast">
      {forecast &&
        forecast?.list?.slice(0, 4).map(({ dt_txt, main, weather }) => (
          <div className="forecast-item">
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
  );
};

export default Forecast;
