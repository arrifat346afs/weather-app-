import React, { useEffect } from "react";
import { useState } from "react";
import SearchBox from "./SearchBox";
import WatherCard from "./WatherCard";
import "../css/home.css";
import 

const api = {
  weatherKey: "911c12b46fee4dba8c5133138252002",
  weatherUrl: "http://api.weatherapi.com/v1",
  geocodeUrl: "https://nominatim.openstreetmap.org/reverse",
};

const Home = () => {
  const [location, setLocation] = useState({
    loaded: false,
    city: "",
    lat: 0,
    lng: 0,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // Reverse geocoding to get accurate city name
        fetch(`${api.geocodeUrl}?lat=${latitude}&lon=${longitude}&format=json`)
          .then((res) => res.json())
          .then((data) => {
            const cityName =
              data.address.city ||
              data.address.town ||
              data.address.village ||
              "Unknown";
            setLocation({
              loaded: true,
              city: cityName,
              lat: latitude,
              lng: longitude,
            });
            fetchWeather(cityName);
          })
          .catch(() => setError("Failed to fetch location name."));
      },
      (error) => setError(error.message)
    );
  }, []);

  const fetchWeather = (query) => {
    if (!query) {
      setError("Please enter a location.");
      return;
    }

    fetch(`${api.weatherUrl}/current.json?key=${api.weatherKey}&q=${query}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((result) => {
        setWeatherData(result);
        setSearchHistory((prevHistory) => {
          const newHistory = [...prevHistory];
          if (
            !newHistory.some(
              (item) => item.location.name === result.location.name
            )
          ) {
            newHistory.push(result);
          }
          return newHistory;
        });
        setError(null);
      })
      .catch(() => setError("Error fetching weather data. Please try again."));
  };

  const searchPress = () => {
    fetchWeather(searchTerm.trim());
  };
  return (
    <div className="home">
      <img src="cloud.png" alt="" />
      <SearchBox
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchPress={searchPress}
      />
      <WatherCard weatherData={weatherData} />

      {/* <h3>Search History</h3>
      <ul>
        {searchHistory.map((item, index) => (
          <li key={index}>
            {item.location.name} - {item.current.temp_c}°C
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Home;
