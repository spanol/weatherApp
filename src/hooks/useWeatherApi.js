import { useCallback } from 'react';

const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

const useWeatherApi = () => {
  const fetchForecast = useCallback(async (cityId) => {
    try {
      const response = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&APPID=${apiKey}`
      );
      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar previsão:', error); 
      return null;
    }
  }, []);

  const fetchCurrentWeather = useCallback(async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${apiKey}`
      );
      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar clima atual:', error);
      return null;
    }
  }, []);

  return { fetchForecast, fetchCurrentWeather };
};

export default useWeatherApi; 