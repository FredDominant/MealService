/* @flow */
import express from 'express';
import bodyParser from 'body-parser';
import babelCoreRegister from 'babel-core/register';
import babelPolyfill from 'babel-polyfill';

import mealController from './mealController';

const app = express();
const mealControllerObject = new mealController();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/meals', mealControllerObject.fetchMeal);

const port = process.env.PORT || 8080;

app.listen(port, function() { 
	console.log(`Listening on port ${this.address().port}`); 
});