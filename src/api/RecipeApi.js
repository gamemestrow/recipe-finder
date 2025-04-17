import axios from "axios";

export const fetchRecipes = async (query,filter = {}) => {
  const {cuisine,diet,mealtype} = filter;

  const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
    params: {
      apiKey: import.meta.env.VITE_API_KEY,
      query: query,
      number: 1,
      cuisine: cuisine || "",
      diet : diet || "",
      mealtype : mealtype || ""
    },
  });
  return response.data.results;
};
