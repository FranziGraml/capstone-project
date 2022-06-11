import styled from 'styled-components';

const ButtonAdd = styled.button`
	display: flex;
	//justify-content: center;
	//align-items: center;
	//border-radius: none;
	position: relative;
	left: -10rem;
	top: 0.1rem;
	border: none;
	background: none;
	//padding: 5px auto;
	margin: 0.5rem;
	cursor: pointer;
	color: var(--bright-green);
	&:hover {
		color: var(--light-green);
	}
`;

export default ButtonAdd;
