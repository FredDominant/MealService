import axios from 'axios';

/**
 * @description Takes a list of parameters and fetches the meals from TheMealDB.com
 * @param	{Array} listOfIds a list of IDs passed from the request 
 * @returns {Int} Id of the Meal with the least number of ingredients
 * @memberof RecipeController
 */
export async function getMealFromRemoteSource(req, res, listOfMealIds) {
	const listOfMealsId = ["52964", "52963", "52962", "52961"];
	let meals = [];
	for (let mealId of listOfMealsId) {
		const { data } = await getFromAPI(mealId)
		const meal = data.meals;
		meals.push(meal);
	}
	return meals;
}

async function getFromAPI(mealId) {
	const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
	return response;
}

function extractIngredients(meal) {
	
}