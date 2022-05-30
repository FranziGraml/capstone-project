import Post from '../../../src/models/Post';

export default async function handler(req, res) {
	const { id } = req.query;

	if (req.method === 'DELETE') {
		const deletedPost = await Post.findByIdAndDelete(id);
		res.status(200).json({ message: 'post deleted', post: deletedPost });
	} else {
		const singleCard = await Post.findById(id);
		res.status(200).json(singleCard);
	}
}
