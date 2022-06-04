import { dbConnect } from '../Components/lib/database';
import Post from '../models/Post';

export const getPosts = async () => {
	await dbConnect();
	const data = await Post.find();

	console.log(data);
	return data.map(({ id, name, content, mail, mobile, postDate, tags }) => ({
		id,
		name,
		content,
		mail,
		mobile,
		postDate,
		tags,
	}));
};
