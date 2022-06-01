import Post from '../../../src/models/Post';

export default async function handler(req, res) {
	const { id } = req.query;

	if (req.method === 'DELETE') {
		try {
			const deletedPost = await Post.findByIdAndDelete(id);
			res.status(200).json({ message: 'post deleted', post: deletedPost });
		} catch (error) {
			res.status(500).json({ error: 'Error could not delete' });
		}
	} else {
		const singleCard = await Post.findById(id);
		res.status(200).json(singleCard);
	}
}
