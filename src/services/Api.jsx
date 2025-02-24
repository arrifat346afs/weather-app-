import React, { useEffect, useState } from "react";

const api = {
  weatherKey: "911c12b46fee4dba8c5133138252002",
  weatherUrl: "http://api.weatherapi.com/v1",
  geocodeUrl: "https://nominatim.openstreetmap.org/reverse",
};

const Api = () => {
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

  return (
    <div>
      <h1>Sylhet Temp now: {temp}</h1>
    </div>
  );
};

export default Api;
