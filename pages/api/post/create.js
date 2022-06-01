import Post from '../../../src/models/Post';
import User from '../../../src/models/User';
import { dbConnect } from '../../../src/Components/lib/database';

export default async function handler(request, response) {
	if (request.method === 'POST') {
		try {
			const data = JSON.parse(request.body);
			await dbConnect();

			let user = await User.findOne({ name: data.name });
			if (!user) {
				user = await User.create({ name: data.name });
			}

			const newPost = await Post.create({
				name: data.name,
				content: data.post,
				mail: data.mail,
				mobile: data.mobile,
				postDate: data.postDate,
			});

			response.status(200).json({ message: 'post created', post: newPost });
		} catch (error) {
			console.log('Error could not POST', error.message);
		}
	} else {
		response.status(405).json({ error: 'wrong method' });
	}
}
