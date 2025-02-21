import React from "react";
import { CiSearch } from "react-icons/ci";
import "../css/scarch.css";

const Scarch = () => {
  return (
    <div className="scarch">
      <input type="text" />
      <button>
        <img src="search.svg" alt="search" />
      </button>
    </div>
  );
};

export default Scarch;
