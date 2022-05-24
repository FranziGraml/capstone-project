import ButtonDelete from '../UI/Form/Button/DeleteButton.styles';

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
