
const api = {
  weatherKey: "911c12b46fee4dba8c5133138252002",
  weatherUrl: "http://api.weatherapi.com/v1",
  geocodeUrl: "https://nominatim.openstreetmap.org/reverse",
};


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