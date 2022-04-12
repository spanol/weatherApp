import { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

export default function WeatherProvider({ children }) {
  const [search, setSearch] = useState("");
  const [background, setBackground] = useState("#FFff")
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState(null);
  return (
    <WeatherContext.Provider
      value={{
        search,
        setSearch,
        weatherData,
        setWeatherData,
        forecast,
        setForecast,
        background,
        setBackground,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(WeatherContext);
  if (!context) throw new Error("useSearch must be used within a CountProvider");
  const { search, setSearch } = context;
  return { search, setSearch };
}

export function useWeather() {
  const context = useContext(WeatherContext);
  if (!context) throw new Error("useWeather must be used within a CountProvider");
  const { weatherData, setWeatherData } = context;
  return { weatherData, setWeatherData };
}

export function useForecast() {
  const context = useContext(WeatherContext);
  if (!context) throw new Error("useForecast must be used within a CountProvider");
  const { forecast, setForecast } = context;
  return { forecast, setForecast };
}

export function useBackground() {
  const context = useContext(WeatherContext);
  if (!context) throw new Error("useBackground must be used within a CountProvider");
  const { background, setBackground } = context;
  return { background, setBackground };
}

