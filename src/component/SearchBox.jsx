import React from "react";
import { FiSearch } from "react-icons/fi";
import "../css/scarch.css";
const SearchBox = ({searchTerm,setSearchTerm,searchPress}) => {
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
          searchPress();
        }
      };


  return (
    <div className="scarch">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress} 
      />
      <button type="submit" onClick={searchPress}>
        <FiSearch />
      </button>
    </div>
  );
};

export default SearchBox;
