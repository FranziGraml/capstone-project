import { getPosts } from '../../src/Services/get-posts';

export default async function handler(req, res) {
	const posts = await getPosts();

	res.status(200).json(posts);
}
