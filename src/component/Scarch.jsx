import React from "react";
import { FiSearch } from "react-icons/fi";
import "../css/scarch.css";

const Scarch = ({scarchTarm,setScarchTaem}) => {
  return (
    <div className="scarch">
      <input type="text" />
      <button type="submit">
        <FiSearch />
      </button>
    </div>
  );
};

export default Scarch;
