import { useEffect, useState } from "react";

import { useForecast, useWeather } from "../../Context/WeatherContext";
import AwaitSearch from "./AwaitSearch";
import Forecast from "./Forecast";
import WeatherComponent from "./Weather";
import { getForecast } from "../../api/weatherApi";

const WeatherContainer = () => {
  const { forecast, setForecast } = useForecast();
  const { weatherData } = useWeather();

  const checkTemperature = weatherData?.main.feels_like > 20 ? "warm" : "cold";

  useEffect(() => {
    const getData = async (id) => {
      const response = await getForecast(id);
      if (response) {
        setForecast(response);
      } else {
        console.error("Error fetching forecast data");
      }
    };

    if (weatherData != null) {
      getData(weatherData.id);
    }
  }, [weatherData, checkTemperature, setForecast]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {weatherData === null ? (
        <AwaitSearch />
      ) : (
        <>
          <WeatherComponent weatherData={weatherData} />
          <Forecast temperature={checkTemperature} forecast={forecast} />
        </>
      )}
    </div>
  );
};

export default WeatherContainer;
