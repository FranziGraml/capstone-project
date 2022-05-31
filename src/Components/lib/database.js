import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: '../../../.env.local' });

const url = 'mongodb://localhost:27017/digi-nomads'; // process.env.DB_CONNECTION ||
console.log(url);
export async function dbConnect() {
	try {
		await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
		console.log('Connected to MongoDB');
	} catch (error) {
		console.error('ERROR could not connect', error.message);
	}
}
