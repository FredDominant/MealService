/* @flow */
import axios from 'axios';

/**
 * @description Takes a list of parameters and fetches the meals from TheMealDB.com
 * @param	{Array} listOfIds a list of IDs passed from the request 
 * @returns {Int} Id of the Meal with the least number of ingredients
 * @export 
 */
export async function getMealFromRemoteSource(req: Request, res: Response, listOfMealIds: Object): Object {
	let meals = [];
	for (let mealId of listOfMealIds) {
		const { data } = await getFromAPI(mealId)
		const meal = data.meals[0];
		const mealIngredients = extractIngredients(meal);
		const mealWithIdAndIngredient = { mealId: meal.idMeal, mealName: meal.strMeal, mealIngredients, numberOfIngredients: mealIngredients.length };
		meals.push(mealWithIdAndIngredient);
	}
	return getMealWithLeastNumberOfIngredients(meals);
}

/**
 * @description Gets a meal detail from TheMelDB.com using the meal Id
 * @param	{string} id the id of the meal to be fetched 
 * @returns {Object} response object from the api
 */
async function getFromAPI(mealId: string): Object {
	let response = null;
	try {
		response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
	} catch(error) {
		throw error;
	}
	if (response != null) return response;
}

/**
 * @description Takes a Meal response object and extracts the ingredients
 * @param	{Object} meal a meal object
 * @returns {Array} a list of the ingredients
 */
function extractIngredients(meal: Object): Array<string> {
	let ingredients = [];
	for (let i = 1; i <= 20; i++) {
		const key = `strIngredient${i}`
		if (meal.hasOwnProperty(key)) {
			if (meal[key].length > 0) ingredients.push(meal[key]);
		}
	}
	return ingredients;
}

/**
 * @description Takes a list of meal objects and returns the meal with the lowest number of ingredients
 * @param	{Array} meals a list of meals 
 * @returns {Object} Meal object with the smallest number of ingredients
 */
function getMealWithLeastNumberOfIngredients(meals: Array<Object>): Object {
	if (meals.length == 1) { 
		return meals[0] 
	} else {
		return meals.sort((a, b) => a.numberOfIngredients - b.numberOfIngredients)[0];
	}
}