export default function DeleteButton({ id, onAddPost, onSetAddPost }) {
	function deletePost() {
		onSetAddPost(onAddPost.filter(post => post.id !== id));
	}

	return (
		<button type="button" onClick={() => deletePost()}>
			Delete
		</button>
	);
}
