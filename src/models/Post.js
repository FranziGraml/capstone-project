import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
	name: String,
	content: String,
	mail: String,
	mobile: String,
	postDate: Number,
	tags: Array,
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Post = mongoose.models.Post ?? mongoose.model('Post', postSchema);

export default Post;
