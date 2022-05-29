import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
	name: String,
	content: String,
	mail: String,
	mobile: String,
});
const Post = mongoose.models.Post ?? mongoose.model('Post', postSchema);

export default Post;
