import React, { useEffect } from "react";

const URL = `http://api.weatherapi.com/v1`;

const Api = () => {
//   const [temp, setTemp] = useState("");

  useEffect(() => {
    const fatchData = async () => {
      const result = await fetch(URL);
      console.log(result);
    };
    fatchData();
  }, []);

  return (
    <div>
      <h1>hi</h1>
    </div>
  );
};

export default Api;
