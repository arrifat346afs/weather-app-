import React from "react";

import { useState } from "react";
import SearchBox from "./SearchBox";

const api = {
  key: "911c12b46fee4dba8c5133138252002",
  url: "http://api.weatherapi.com/v1",
};

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [weatherData, setWeatherData] = useState("");

  const searchPress = () => {
    fetch(`${api.url}/current.json?key=${api.key}&q=${searchTerm}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };

  return (
    <>
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchPress={searchPress} />
      <h2>Weather in {weatherData.name}</h2>
      {/* <p>{weatherData.current.temp_c}</p> */}
      {/* <img src={weatherData.current.condition.icon} alt="weather icon" /> */}
    </>
  );
};

export default Home;
