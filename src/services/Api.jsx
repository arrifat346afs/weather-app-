import React, { useEffect, useState } from "react";

const api = {
  weatherKey: "911c12b46fee4dba8c5133138252002",
  weatherUrl: "http://api.weatherapi.com/v1",
  geocodeUrl: "https://nominatim.openstreetmap.org/reverse",
};


const Api = () => {
    const [temp, setTemp] = useState(0);

  useEffect(() => {
    const fatchData = async () => {
      const result = await fetch(URL);
      result.json().then((json) => {
        setTemp(json.current.gust_kph)
      });
    };
    fatchData();
  }, []);

  return (
    <div>
      <h1>Sylhet Temp now: {temp}</h1>
    </div>
  );
};

export default Api;
