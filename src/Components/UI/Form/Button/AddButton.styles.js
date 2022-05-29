import styled from 'styled-components';

const ButtonAdd = styled.button`
	border-radius: none;
	border: none;
	background: none;
	display: flex;
	padding: 5px 30px;
	cursor: pointer;
	color: var(--bright-green);
	&:hover {
		color: var(--light-green);
	}
`;

export default ButtonAdd;
