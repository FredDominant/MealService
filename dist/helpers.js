"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getMealFromRemoteSource = undefined;

/**
 * @description Takes a list of parameters and fetches the meals from TheMealDB.com
 * @param	{Array} listOfIds a list of IDs passed from the request 
 * @returns {Int} Id of the Meal with the least number of ingredients
 * @memberof RecipeController
 */
var getMealFromRemoteSource = exports.getMealFromRemoteSource = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, listOfMealIds) {
		var listOfMealsId, meals, mealId, data;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						listOfMealsId = ["52964", "52963", "52962", "52961"];
						meals = [];
						_context.t0 = regeneratorRuntime.keys(listOfMealsId);

					case 3:
						if ((_context.t1 = _context.t0()).done) {
							_context.next = 11;
							break;
						}

						mealId = _context.t1.value;
						_context.next = 7;
						return getFromAPI(mealId);

					case 7:
						data = _context.sent;

						meals.push(data);
						_context.next = 3;
						break;

					case 11:
						return _context.abrupt("return", meals);

					case 12:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function getMealFromRemoteSource(_x, _x2, _x3) {
		return _ref.apply(this, arguments);
	};
}();

var getFromAPI = function () {
	var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(mealId) {
		var response;
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 2;
						return _axios2.default.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealId);

					case 2:
						response = _context2.sent;
						return _context2.abrupt("return", response);

					case 4:
					case "end":
						return _context2.stop();
				}
			}
		}, _callee2, this);
	}));

	return function getFromAPI(_x4) {
		return _ref2.apply(this, arguments);
	};
}();

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }