/* @flow */

import axios from 'axios';

/**
 * @description Takes a list of parameters and fetches the meals from TheMealDB.com
 * @param	{Array} listOfIds a list of IDs passed from the request 
 * @returns {Int} Id of the Meal with the least number of ingredients
 * @memberof RecipeController
 */
export async function getMealFromRemoteSource(req: Request, res: Response, listOfMealIds: Object): Object {
	const listOfMealsId = ["52964", "52963", "52962", "52961"];
	let meals = [];
	for (let mealId of listOfMealsId) {
		const { data } = await getFromAPI(mealId)
		const meal = data.meals[0];
		const mealIngredients = extractIngredients(meal);
		const mealWithIdAndIngredient = { mealId: meal.idMeal, mealIngredients, numberOfIngredients: mealIngredients.length };
		meals.push(mealWithIdAndIngredient);
	}
	return getMealWithLeastNumberOfIngredients(meals);
}

async function getFromAPI(mealId: string): Object {
	const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
	return response;
}

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

function getMealWithLeastNumberOfIngredients(meals: Array<Object>): Object {
	if (meals.length == 1) { 
		return meals[0] 
	} else {
		return meals.sort((a, b) => a.numberOfIngredients - b.numberOfIngredients);
	}
}