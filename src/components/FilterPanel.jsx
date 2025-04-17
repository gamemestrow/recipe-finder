import React from "react";
import { FaFilter } from "react-icons/fa";

const FilterPanel = ({ setfilter, filter }) => {
  const handleFilterChange = (e) => {
    setfilter((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const selectClassName = "w-40 md:w-48 lg:w-52 h-8 md:h-9 lg:h-10 rounded-full bg-[#F3F4F6] dark:bg-[#2C2C2C] text-gray-900 dark:text-gray-100 text-sm md:text-base lg:text-lg px-4 cursor-pointer hover:bg-[#E5E7EB] dark:hover:bg-[#3C3C3C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="relative group">
      <div className="cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-200">
        <FaFilter className="dark:text-[#E0E0E0] text-gray-900 text-xl md:text-2xl lg:text-3xl" />
      </div>
      
      <div className="absolute right-0 top-12 bg-white dark:bg-[#1E1E1E] shadow-lg rounded-lg p-4 md:p-5 lg:p-6 hidden group-hover:flex flex-col gap-3 md:gap-4 lg:gap-5 min-w-[200px] md:min-w-[240px] lg:min-w-[280px] border border-gray-200 dark:border-gray-700">
        <select
          name="diet"
          value={filter?.diet}
          onChange={handleFilterChange}
          className={selectClassName}
        >
          <option value="">Diet</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="gluten free">Gluten Free</option>
        </select>

        <select
          name="Cuisine"
          value={filter?.Cuisine}
          onChange={handleFilterChange}
          className={selectClassName}
        >
          <option value="">Cuisine</option>
          <option value="indian">Indian</option>
          <option value="italian">Italian</option>
          <option value="mexican">Mexican</option>
        </select>

        <select
          name="mealType"
          value={filter?.mealType}
          onChange={handleFilterChange}
          className={selectClassName}
        >
          <option value="">Meal Type</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;
