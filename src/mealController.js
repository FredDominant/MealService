/* @flow */
import { getMealFromRemoteSource } from './helpers';

/**
	 *
	 * @class RecipeController
	 * @exports 
	 */
export default class RecipeController {

	/**
	 * @description Takes request and response as parameters and returns a response after an action has been taken
	 * @param {request} req HTTP request object
	 * @param {response} req HTTP response object
	 * @returns {response} response
	 * @memberof RecipeController
	 */
	async fetchMeal(req: any, res: any): Promise<any> {
		const { data } = req.body;
		if (data == null) return res.status(400).json({ message: 'Meal Id(s) are required' });

		if (data.trim().length < 1) return res.status(400).json({ message: 'No meal Id(s) passed' });

		if (!Array.isArray(JSON.parse(data))) return res.status(400).json({ message: 'Data should be an array' })

		const result = await getMealFromRemoteSource(req, res, JSON.parse(data));
		return res.status(200).json({ message: 'success', meals: result });
	}

};