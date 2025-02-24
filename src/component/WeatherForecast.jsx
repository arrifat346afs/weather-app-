
import React, { useState, useEffect } from "react";

const YOUR_API_KEY = 




const WeatherForecast = ({city}) => {
    const [forecastData, setForecastData] = useState([]);
  const [pastWeatherData, setPastWeatherData] = useState([]);

  useEffect(() => {
    if (city) {
      fetchForecastWeather(city);
      fetchPastWeather(city, "2024-02-20"); // Example past date
    }
  }, [city]);

  const fetchForecastWeather = (city) => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=${city}&days=7`)
      .then((res) => res.json())
      .then((data) => setForecastData(data.forecast.forecastday))
      .catch((error) => console.error("Error fetching forecast data:", error));
  };

  const fetchPastWeather = (city, date) => {
    fetch(`http://api.weatherapi.com/v1/history.json?key=YOUR_API_KEY&q=${city}&dt=${date}`)
      .then((res) => res.json())
      .then((data) => setPastWeatherData(data.forecast.forecastday))
      .catch((error) => console.error("Error fetching past weather data:", error));
  };

  return (
    <div>
      <h2>7-Day Forecast for {city}</h2>
      {forecastData.map((day) => (
        <div key={day.date}>
          <p>{day.date}: {day.day.condition.text}</p>
          <p>Max: {day.day.maxtemp_c}°C, Min: {day.day.mintemp_c}°C</p>
        </div>
      ))}

      <h2>Past Weather for {city}</h2>
      {pastWeatherData.map((day) => (
        <div key={day.date}>
          <p>{day.date}: {day.day.condition.text}</p>
          <p>Max: {day.day.maxtemp_c}°C, Min: {day.day.mintemp_c}°C</p>
        </div>
      ))}
    </div>
  );
};
  


export default WeatherForecast
