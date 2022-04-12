import { useEffect, useState } from "react";

import { useForecast, useWeather } from "../../Context/WeatherContext";
import AwaitSearch from "./AwaitSearch";
import Forecast from "./Forecast";
import WeatherComponent from "./Wheater";

const WeatherContainer = () => {
  const [background, setBackground] = useState("container");
  const { forecast, setForecast } = useForecast();
  const { weatherData } = useWeather();

  const checkTemperature =
    weatherData?.main.feels_like > 23 ? "container warm" : "container cold";

  useEffect(() => {
    function getForecast(id) {
      return fetch(
        `https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&APPID=` + process.env.APIKEY
      )
        .then((response) => response.json())
        .then((data) => {
          setForecast(data);
          setBackground(checkTemperature);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    if (weatherData != null) {
      getForecast(weatherData.id);
    }
  }, [weatherData]);

  return (
    <div className={background}>
      {weatherData === null ? (
        <AwaitSearch />
      ) : (
        <>
          <WeatherComponent weatherData={weatherData} />
          <Forecast forecast={forecast} />
        </>
      )}
    </div>
  );
};

export default WeatherContainer;
