import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema(
	{
		name: String,
		content: { type: String, required: true },
		mail: String,
		mobile: String,
		postDate: Number,
		tags: Array,
		user: { type: Schema.Types.ObjectId, ref: 'User' },
	},
	{
		timesstamps: true,
	}
);

const Post = mongoose.models.Post ?? mongoose.model('Post', postSchema);

export default Post;
