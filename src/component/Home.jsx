import React from "react";
import Scarch from "./component/Scarch";
import { useState } from "react";
import { keyframes } from "motion";



const BASE_URL = ;

const api = {
  key:"911c12b46fee4dba8c5133138252002",
  url: 
}


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
