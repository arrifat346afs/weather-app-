import React, { useEffect } from "react";

const URL = `http://api.weatherapi.com/v1/current.json?key=911c12b46fee4dba8c5133138252002&q=Dhaka`;

const Api = () => {
  //   const [temp, setTemp] = useState("");

  useEffect(() => {
    const fatchData = async () => {
      const result = await fetch(URL);
      result.json().then((json) => {
        console.log(json);
      });
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
