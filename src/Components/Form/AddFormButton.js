import ButtonAdd from '../UI/Form/Button/AddButton.styles';

export default function AddFormButton({ onSetIsFormActive }) {
	return (
		<ButtonAdd type="button" onClick={() => onSetIsFormActive(prevCheck => !prevCheck)}>
			Add new Post
		</ButtonAdd>
	);
}
