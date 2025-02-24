import React from 'react'

const WeatherForecast = () => {
    const [forecastData, setForecastData] = useState([]);
    const [pastWeatherData, setPastWeatherData] = useState([]);
  
    useEffect(() => {
      if (location) {
        fetchForecastWeather(location);
        fetchPastWeather(location, "2024-02-20"); // Example past date
      }
    }, [location]);
  
    const fetchForecastWeather = (location) => {
      fetch(`http://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=${location}&days=7`)
        .then((res) => res.json())
        .then((data) => setForecastData(data.forecast.forecastday))
        .catch((error) => console.error("Error fetching forecast data:", error));
    };
  
    const fetchPastWeather = (location, date) => {
      fetch(`http://api.weatherapi.com/v1/history.json?key=YOUR_API_KEY&q=${location}&dt=${date}`)
        .then((res) => res.json())
        .then((data) => setPastWeatherData(data.forecast.forecastday))
        .catch((error) => console.error("Error fetching past weather data:", error));
    };
  
    return (
      <div>
        <h2>7-Day Forecast for {location}</h2>
        {forecastData.map((day) => (
          <div key={day.date}>
            <p>{day.date}: {day.day.condition.text}</p>
            <p>Max: {day.day.maxtemp_c}°C, Min: {day.day.mintemp_c}°C</p>
          </div>
        ))}
  
        <h2>Past Weather for {location}</h2>
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
