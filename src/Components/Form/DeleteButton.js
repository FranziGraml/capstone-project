import ButtonDelete from '../UI/Form/Button/DeleteButton.styles';
import Icon from '../UI/Icons/icons';

export default function DeleteButton({ id, onPosts, onSetPosts }) {
	function deletePost() {
		onSetPosts(onPosts.filter(post => post.id !== id));
	}

	return (
		<ButtonDelete type="button" onClick={() => deletePost()}>
			<Icon variant="waste" />
		</ButtonDelete>
	);
}
