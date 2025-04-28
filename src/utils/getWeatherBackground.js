// src/utils/getWeatherBackground.js
export default function getWeatherBackground(weatherData) {
  if (!weatherData || !weatherData.main || !weatherData.weather) return "";

  const temp = weatherData.main.feels_like;
  const mainWeather = weatherData.weather[0].main.toLowerCase();

  console.log("Weather Data:", weatherData);
  console.log("Weather Data:", mainWeather);
  console.log("Temperature:", temp);

  if (mainWeather === "snow") return "snowy";
  if (temp > 35 && (mainWeather === "clear" || mainWeather === "sunny")) return "desertic";
  if (temp > 25 && ["rain", "thunderstorm"].includes(mainWeather)) return "warm";
  if (["rain", "drizzle", "thunderstorm"].includes(mainWeather)) return "cold";
  if (temp < 10 && mainWeather !== "snow") return "cold";
  if (temp > 25) return "warm";
  return "cold";
}