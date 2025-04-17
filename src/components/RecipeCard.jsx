import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.id}`}>
      <div className="w-full md:w-[320px] lg:w-[360px] h-[400px] md:h-[440px] lg:h-[470px] rounded-lg p-4 md:p-6 lg:p-10 dark:bg-[#242424] bg-[#E5E7EB] dark:text-[#E0E0E0] text-gray-900 flex justify-center items-center flex-col gap-8 md:gap-12 lg:gap-16">
        <img className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-md" src={`${recipe.image}`} />
        <div className="flex gap-3 md:gap-4 lg:gap-5 flex-col">
          <div className="text-xl md:text-2xl lg:text-3xl">{recipe.id}</div>
          <div className="text-lg md:text-xl lg:text-2xl">{recipe.title}</div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
