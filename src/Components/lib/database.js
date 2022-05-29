import mongoose from 'mongoose';

const url = 'mongodb://localhost:27017/digi-nomads';
console.log(url);
export async function dbConnect() {
	try {
		await mongoose.connect(url);
		console.log('Connected to MongoDB');
	} catch (error) {
		console.error('ERROR could not connect', error.message);
	}
}
