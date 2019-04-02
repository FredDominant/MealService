import express from 'express';

const app = express();

const port = process.env.PORT || 8080;

app.listen(port, function() { 
	console.log(`Listening on port ${this.address().port}`); 
});