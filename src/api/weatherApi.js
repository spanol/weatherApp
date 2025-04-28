import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

/**
 * Obtém os dados meteorológicos atuais para uma cidade
 * @param city Nome da cidade ou string de busca
 * @returns Promise com os dados de clima atual
 */
export const getCurrentWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        units: 'metric',
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching current weather:', error);
    throw new Error('Failed to fetch current weather data');
  }
};

/**
 * Obtém a previsão do tempo para 5 dias/3 horas para um ID de cidade
 * @param cityId ID da cidade no OpenWeatherMap
 * @returns Promise com os dados de previsão
 */
export const getForecast = async (cityId) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        id: cityId,
        units: 'metric',
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching forecast:', error);
    throw new Error('Failed to fetch forecast data');
  }
};

/**
 * Obtém ambos os dados atuais e de previsão para uma cidade
 * @param city Nome da cidade ou string de busca
 * @returns Promise com ambos os conjuntos de dados
 */
export const getWeatherAndForecast = async (city) => {
  try {
    const currentWeather = await getCurrentWeather(city);
    const forecast = await getForecast(currentWeather.id);
    return { currentWeather, forecast };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};