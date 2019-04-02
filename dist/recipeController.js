'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (req, res) {
	var data = req.body.data;

	if (data == null) return res.status(400).json({ message: 'Meal Id(s) are required' });

	console.log("JSONNNNN", data);
	if (data.trim().length < 1) return res.status(400).json({ message: 'No meal Id(s) passed' });

	console.log("JSONNNNN", data);
	return res.status(200).json({ message: 'success' });
};

;