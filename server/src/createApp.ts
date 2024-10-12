import express from 'express';

export function createApp() {
	const app = express();

	app.use('/', (req, res) => {
		res.send('Hello weklcome to HSU API APP! again chooks again 2');
	});

	return app;
}
