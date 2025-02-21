import React from "react";
import { FiSearch } from "react-icons/fi";
import "../css/scarch.css";

const Scarch = ({ scarchTarm, setScarchTaem }) => {

  const scarchPress= ()=>{
    console.log("hellow")
    con
  }



  return (
    <div className="scarch">
      <input type="text" onChange={(e) => setScarchTaem(e.target.value)} />
      <button type="submit" onClick={scarchPress}>
        <FiSearch />
      </button>
    </div>
  );
};

export default Scarch;
