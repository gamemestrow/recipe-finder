import React, { useState } from "react";
import { fetchRecipes } from "../api/RecipeApi";
import HeaderPart from "../components/HeaderPart";
import RecipeCard from "../components/RecipeCard";
import { motion, useScroll, useSpring } from "motion/react";
import SkeletonCard from "../components/SkeletonCard";

const Home = ({ darkMode, setdarkMode }) => {
  const [filter, setfilter] = useState({
    Cuisine: "",
    Diet: "",
    mealType: "",
  });

  const [recipe, setrecipe] = useState([]);
  const [query, setquery] = useState("");
  const [error, seterror] = useState(null);
  const [loading, setLoading] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  const handlesubmit = async () => {
    setLoading(true);
    seterror(null); // clear old errors
    try {
      const recipe = await fetchRecipes(query, filter);
      setrecipe(recipe);
    } catch (error) {
      seterror("Oops! Something went wrong while fetching recipes.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FAFAFA] dark:bg-[#1E1E1E] flex flex-col justify-start items-center gap-6 md:gap-8 lg:gap-10 pb-6 md:pb-8 lg:pb-10 overflow-x-hidden">
      <motion.div style={{ scaleX }} className="w-full h-1 md:h-1.5 lg:h-2 bg-pink-600 fixed" />
      <HeaderPart
        query={query}
        setquery={setquery}
        handlesubmit={handlesubmit}
        darkMode={darkMode}
        setdarkMode={setdarkMode}
        setfilter={setfilter}
        filter={filter}
      />

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
        </div>
      )}

      {error && <p className="text-red-500 text-center text-base md:text-lg lg:text-xl">{error}</p>}

      {!loading && !error && recipe.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 text-xl md:text-3xl lg:text-5xl">
          No recipes found. Try different keywords or filters.
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {!loading &&
          recipe.map((recipe) => (
            <motion.div key={recipe.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <RecipeCard recipe={recipe} />
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Home;
