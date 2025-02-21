import React from "react";
import Scarch from "./component/Scarch";
import { useState } from "react";

const API_KEY = "911c12b46fee4dba8c5133138252002";

const BASE_URL = "http://api.weatherapi.com/v1";

const 


const Home = () => {
  const [scarchTarm, setScarchTaem] = useState("");


  const scarchPress= ()=>{
    fetch(``)
  }




  return (
    <div>
      <Scarch scarchTarm={scarchTarm} setScarchTaem={setScarchTaem} scarchPress={scarchPress} />
    </div>
  );
};

export default Home;
