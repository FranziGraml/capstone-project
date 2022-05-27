import ButtonDelete from '../UI/Form/Button/DeleteButton.styles';

export default function DeleteButton({ id, onSetPosts, posts }) {
	function deletePost() {
		onSetPosts(
			posts.filter(post => {
				return post.id !== id && post;
			})
		);
	}

	return (
		<ButtonDelete type="button" onClick={() => deletePost()}>
			Delete
		</ButtonDelete>
	);
}
