import React from "react";
import 'wathercard.css'
const WatherCard = ({ weatherData }) => {
  return (
    <div className="wather-card">
      {weatherData ? (
        weatherData.location ? (
          <div>
            <h2>Weather in {weatherData.location.name}</h2>
            <img
              src={`https:${weatherData.current.condition.icon}`}
              alt="Weather icon"
            />
            <p>Temperature: {weatherData.current.temp_f}°F</p>
            <p>Condition: {weatherData.current.condition.text}</p>
          </div>
        ) : (
          <p>No location data available.</p>
        )
      ) : (
        <p>Enter a city to get the weather data.</p>
      )}
    </div>
  );
};

export default WatherCard;
