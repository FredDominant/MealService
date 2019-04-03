# MealService

### This application consumes [TheMealDB.com's API.](https://themealdb.com) 

## Tools:
1. Node.js version 11
2. Express.js
3. Axios
4. Docker

## How to Install
**Ensure you have [docker](https://www.docker.com/) installed**
1. Clone this repo by running `git@github.com:Noblemajesty/MealService.git` in your command line
2. Change directory into the cloned repo by running `cd MealService`
3. Build the project by running `docker build -t node-meal-service .`
4. Run the application by using `docker run -it -p 3472:8080 node-meal-service`

## How to use
1. On your [postman](https://www.getpostman.com/), make a `POST` `localhost:3742/meals`
A `JSON` example request looks like this 
```
{
	"data": ["52964", "52963", "52962", "52961"]
}
```
A response would look like this 
```
{
    "message": "success",
    "meals": {
        "mealId": "52961",
        "mealIngredients": [
            "Ricotta",
            "Eggs",
            "Flour",
            "Sugar",
            "Cinnamon",
            "Lemons",
            "Dark Rum",
            "Icing Sugar"
        ],
        "numberOfIngredients": 8
    }
}
```
The meal with id `52961` has the smallest number of ingredients, 8