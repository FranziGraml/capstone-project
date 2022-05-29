import { dbConnect } from '../Components/lib/database';
import Post from '../models/Post';

export const getPosts = async () => {
	await dbConnect();
	const data = await Post.find();
	//console.log('Data: ' + data);
	return data.map(({ name, content, mail, mobile }) => ({
		name,
		content,
		mail,
		mobile,
	}));
};

/* 
export const getPosts = async () => {
	await dbConnect();
	const data = await Post.find().populate('user');
	return data.map(({ id, name, content, mail, mobile }) => ({
		id,
		name,
		content,
		mail,
		mobile,
	}));
}; */
