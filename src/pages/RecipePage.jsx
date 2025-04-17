import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderPart from "../components/HeaderPart";
import { motion, useScroll, useSpring } from "motion/react";

const RecipePage = ({darkMode,setdarkMode}) => {
  const { id } = useParams();
  const [recipe, setrecipe] = useState(null);
  const [loading, setloading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  useEffect(() => {
    const fillRecipe = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${
            import.meta.env.VITE_API_KEY
          }`
        );
        setrecipe(response.data);
      } catch (error) {
      } finally {
        setloading(false);
      }
    };
    fillRecipe();
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center text-5xl">loading... please wait...</div>;
  }
  if (!recipe) {
    return <div className="flex justify-center items-center text-5xl">Recipe didn't found...</div>;
  }

  return (
    <div className='w-full overflow-hidden flex bg-[#FAFAFA] dark:bg-[#1E1E1E] items-center flex-col dark:text-[#FFFFFF] text-gray-900 gap-6 md:gap-8 lg:gap-10'>
      <motion.div style={{ scaleX }} className="w-full h-1 md:h-1.5 lg:h-2 bg-pink-600 fixed" />
      <HeaderPart darkMode={darkMode} setdarkMode={setdarkMode}/>
      <div className="w-full md:w-3/4 lg:w-1/2 h-full flex justify-start flex-col gap-4 dark:bg-[#2C2C2C] bg-[#F3F4F6] p-4 md:p-6 lg:p-10 box-border rounded-lg mx-4">
        <div className="text-2xl md:text-3xl lg:text-5xl font-bold">{recipe.title}</div>
        <div className="w-full">
          <img src={recipe.image} alt={recipe.title} className="w-full rounded-2xl overflow-hidden"/>
        </div>
        <p className="text-xl md:text-2xl lg:text-4xl">
          <strong>Ready in:</strong> {recipe.readyInMinutes} minutes
        </p>
        <p className="text-xl md:text-2xl lg:text-4xl"><strong>Servings:</strong> {recipe.servings}</p>
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">Ingredients:</h2>
        <div className="text-lg md:text-xl lg:text-3xl">
          <ul className="list-disc pl-6">
            {recipe.extendedIngredients.map((item, index) => (
              <li key={index} className="mb-2">{item.original}</li>
            ))}
          </ul>
        </div>
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mt-4 md:mt-5 lg:mt-6">Instructions:</h2>
        <div
          className="prose text-lg md:text-xl lg:text-3xl dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: recipe.instructions }}
        />
      </div>
    </div>
  );
};

export default RecipePage;
