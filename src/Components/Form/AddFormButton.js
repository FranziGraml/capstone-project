export default function AddFormButton({ onSetFormButton }) {
	return (
		<button type="button" onClick={() => onSetFormButton(prevCheck => !prevCheck)}>
			Add new Post
		</button>
	);
}
