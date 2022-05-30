import { getPosts } from '../../src/Services/get-posts';

export default async function handler(req, res) {
	const posts = await getPosts();
	console.log('/api/posts: ' + posts);

	res.status(200).json(posts);
}
