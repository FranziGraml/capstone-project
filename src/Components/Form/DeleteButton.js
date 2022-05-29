import ButtonDelete from '../UI/Form/Button/DeleteButton.styles';
import Icon from '../UI/Icons/icons';

export default function DeleteButton({ id, onSetPosts, posts }) {
	function deletePost() {
		onSetPosts(posts.filter(post => post.id !== id));
	}

	return (
		<ButtonDelete type="button" onClick={() => deletePost()}>
			<Icon variant="waste" />
		</ButtonDelete>
	);
}
