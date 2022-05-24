import ButtonDelete from '../UI/Button/DeleteButton.styles.js';

export default function DeleteButton({ id, onAddPost, onSetAddPost }) {
	function deletePost() {
		onSetAddPost(onAddPost.filter(post => post.id !== id));
	}

	return (
		<ButtonDelete type="button" onClick={() => deletePost()}>
			Delete
		</ButtonDelete>
	);
}
