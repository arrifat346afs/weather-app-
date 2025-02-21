import React from "react";
import Scarch from "./component/Scarch";
import { useState } from "react";




const api = {
  key:"911c12b46fee4dba8c5133138252002",
  url: "http://api.weatherapi.com/v1",
}


const Home = () => {
  const [scarchTarm, setScarchTaem] = useState("");


  const scarchPress= ()=>{
    fetch(`${api.url}`)
  }




  return (
    <div>
      <Scarch scarchTarm={scarchTarm} setScarchTaem={setScarchTaem} scarchPress={scarchPress} />
    </div>
  );
};

export default Home;
