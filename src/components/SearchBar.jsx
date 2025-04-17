import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ query, setquery, handlesubmit }) => {
  return (
    <div className="w-[200px] md:w-[280px] lg:w-[350px] h-8 md:h-9 lg:h-10 text-[#111827] dark:text-[#E0E0E0] text-lg md:text-xl lg:text-2xl bg-[#2563EB] dark:bg-[#4F46E5] hover:bg-[#2c57b5] hover:dark:bg-[#413cb2] flex justify-center items-center gap-2 rounded-full">
      <input
        type="text"
        value={query}
        onChange={(e) => setquery(e.target.value)}
        className="bg-transparent text-center w-3/4"
        placeholder="Search recipes..."
      />
      <button onClick={handlesubmit} className="p-2">
        <FaSearch className="text-base md:text-lg lg:text-xl" />
      </button>
    </div>
  );
};

export default SearchBar;
