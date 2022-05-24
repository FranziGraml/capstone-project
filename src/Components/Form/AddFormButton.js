import ButtonAdd from '../UI/Form/Button/AddButton.styles';

export default function AddFormButton({ onSetFormButton }) {
	return (
		<ButtonAdd type="button" onClick={() => onSetFormButton(prevCheck => !prevCheck)}>
			Add new Post
		</ButtonAdd>
	);
}
