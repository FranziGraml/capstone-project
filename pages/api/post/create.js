import Post from '../../../src/models/Post';
import User from '../../../src/models/User';
import { dbConnect } from '../../../src/Components/lib/database';

export default async function handler(request, response) {
	if (request.method === 'POST') {
		try {
			const data = JSON.parse(request.body);
			await dbConnect();

			let user = await User.findOne({ email: data.user.email });
			if (!user) {
				user = await User.create({ ...data.user });
			}

			/* let user = await User.findOne({ name: data.name });
			if (!user) {
				user = await User.create({ name: data.name });
			}
 */
			const newPost = await Post.create({
				name: data.name,
				content: data.post,
				mail: data.mail,
				mobile: data.mobile,
				postDate: data.postDate,
				tags: data.tags,
			});
			console.log('data.tag: ' + data.tags);
			console.log('data.post: ' + data.post);
			response.status(200).json({ message: 'post created', post: newPost });
		} catch (error) {
			response.status(500).json({ error: 'Error could not POST' });
		}
	} else {
		response.status(405).json({ error: 'wrong method' });
	}
}
