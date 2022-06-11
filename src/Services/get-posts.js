import { dbConnect } from '../Components/lib/database';
import Post from '../models/Post';

export const getPosts = async () => {
	await dbConnect();
	const data = await Post.find().populate('user');
	console.log('data: ' + data);
	return data.map(({ id, name, content, mail, mobile, postDate, tags }) => {
		return {
			id,
			name,
			content,
			mail,
			mobile,
			postDate,
			tags,
			/* user: {
				id: user.id,
				name: user.name,
				email: user.email,
				image: user.image,
			}, */
		};
	});
};
