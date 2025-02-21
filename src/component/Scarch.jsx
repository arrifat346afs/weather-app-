import React from "react";
import { FiSearch } from "react-icons/fi";
import "../css/scarch.css";

const Scarch = ({ scarchTarm, setScarchTaem }) => {



  return (
    <div className="scarch">
      <input type="text" value={scarchTarm} onChange={(e) => setScarchTaem(e.target.value)} />
      <button type="submit" onClick={scarchPress}>
        <FiSearch />
      </button>
    </div>
  );
};

export default Scarch;
