import { createApp } from './createApp';
import dotevn from 'dotenv';
dotevn.config();

const app = createApp();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`App running on http://localhost:${5008} `);
});
