import React from "react";

import { useState } from "react";




const api = {
  key:"911c12b46fee4dba8c5133138252002",
  url: "http://api.weatherapi.com/v1",
}


const Home = () => {
  const [scarchTarm, setScarchTaem] = useState("");


  const scarchPress= ()=>{
    fetch(`${api.url}current.json?key=${api.key}q=${scarchTarm}`)
    .then((res)=> res.json())
    .then((result)=>{
      console.log(result)
    })
  }




  return (
        <div className="scarch">
          <input type="text" value={scarchTarm} onChange={(e) => setScarchTaem(e.target.value)} />
          <button type="submit" onClick={scarchPress}>
            <FiSearch />
          </button>
        </div>
  );
};

export default Home;
