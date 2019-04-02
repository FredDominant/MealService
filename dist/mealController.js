'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
	 *
	 * @class RecipeController
	 * @exports 
	 */
var RecipeController = function () {
	function RecipeController() {
		_classCallCheck(this, RecipeController);
	}

	_createClass(RecipeController, [{
		key: 'fetchMeal',


		/**
   * @description Takes request and response as parameters and returns a response after an action has been taken
   * @param {request} req HTTP request object
   * @param {response} req HTTP response object
   * @returns {response} response
   * @memberof RecipeController
   */
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
				var data, result;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								data = req.body.data;

								if (!(data == null)) {
									_context.next = 3;
									break;
								}

								return _context.abrupt('return', res.status(400).json({ message: 'Meal Id(s) are required' }));

							case 3:
								if (!(data.trim().length < 1)) {
									_context.next = 5;
									break;
								}

								return _context.abrupt('return', res.status(400).json({ message: 'No meal Id(s) passed' }));

							case 5:
								if (Array.isArray(JSON.parse(data))) {
									_context.next = 7;
									break;
								}

								return _context.abrupt('return', res.status(400).json({ message: 'Data should be an array' }));

							case 7:
								_context.next = 9;
								return (0, _helpers.getMealFromRemoteSource)(req, res, JSON.parse(data));

							case 9:
								result = _context.sent;
								return _context.abrupt('return', res.status(200).json({ message: 'success', data: result }));

							case 11:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function fetchMeal(_x, _x2) {
				return _ref.apply(this, arguments);
			}

			return fetchMeal;
		}()
	}]);

	return RecipeController;
}();

exports.default = RecipeController;
;