'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _register = require('babel-core/register');

var _register2 = _interopRequireDefault(_register);

var _babelPolyfill = require('babel-polyfill');

var _babelPolyfill2 = _interopRequireDefault(_babelPolyfill);

var _mealController = require('./mealController');

var _mealController2 = _interopRequireDefault(_mealController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var mealControllerObject = new _mealController2.default();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

app.post('/meals', mealControllerObject.fetchMeal);

var port = process.env.PORT || 8080;

app.listen(port, function () {
	console.log('Listening on port ' + this.address().port);
});