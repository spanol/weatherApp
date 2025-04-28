import { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

export default function WeatherProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState(null);
  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
        forecast,
        setForecast,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  const context = useContext(WeatherContext);
  if (!context) throw new Error("useWeather must be used within a context");
  const { weatherData, setWeatherData } = context;
  return { weatherData, setWeatherData };
}

export function useForecast() {
  const context = useContext(WeatherContext);
  if (!context) throw new Error("useForecast must be used within a context");
  const { forecast, setForecast } = context;
  return { forecast, setForecast };
}


