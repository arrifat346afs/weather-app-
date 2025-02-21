import React from "react";
import { FiSearch } from "react-icons/fi";
const SearchBox = () => {
  return (
    <div className="scarch">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" onClick={scarchPress}>
        <FiSearch />
      </button>
    </div>
  );
};

export default SearchBox;
