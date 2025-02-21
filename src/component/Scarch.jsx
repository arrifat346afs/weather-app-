import React from "react";
import { CiSearch } from "react-icons/ci";
import "../css/scarch.css";

const Scarch = () => {
  return (
    <div className="scarch">
      <input type="text" />
      <button>
        <CiSearch />
      </button>
    </div>
  );
};

export default Scarch;
