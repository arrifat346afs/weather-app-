import React from "react";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import "../css/scarch.css";

const api = {
  key: "911c12b46fee4dba8c5133138252002",
  url: "http://api.weatherapi.com/v1",
};

const Home = () => {
  const [scarchTarm, setScarchTaem] = useState("");

  const scarchPress = () => {
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
    <div className="scarch">
      <input
        type="text"
        value={scarchTarm}
        onChange={(e) => setScarchTaem(e.target.value)}
      />
      <button type="submit" onClick={scarchPress}>
        <FiSearch />
      </button>
    </div>
  );
};

export default Home;
