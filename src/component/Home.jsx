import React from "react";

import { useState } from "react";
import SearchBox from "./SearchBox";

const api = {
  key: "911c12b46fee4dba8c5133138252002",
  url: "http://api.weatherapi.com/v1",
};

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  const searchPress = () => {
    fetch(`${api.url}/current.json?key=${api.key}&q=${searchTerm}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((result) => {
        setWeatherData(result);
        setSearchHistory((prevHistory)=>{
          const newHistory = [...prevHistory];
          if(!newHistory.some(item=> item.location.name === result.location.name))
        })
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };

  return (
    <>
      <SearchBox
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchPress={searchPress}
      />
      {weatherData ? (
        weatherData.location ? (
          <div>
            <h2>Weather in {weatherData.location.name}</h2>
            <p>Temperature: {weatherData.current.temp_c}°C</p>
            <p>Condition: {weatherData.current.condition.text}</p>
            <img
              src={`https:${weatherData.current.condition.icon}`}
              alt="Weather icon"
            />
          </div>
        ) : (
          <p>No location data available.</p>
        )
      ) : (
        <p>Enter a city to get the weather data.</p>
      )}
    </>
  );
};

export default Home;
