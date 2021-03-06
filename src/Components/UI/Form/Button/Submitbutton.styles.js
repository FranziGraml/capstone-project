import styled from 'styled-components';

const ButtonSubmit = styled.button`
	border: none;
	background: none;
	display: flex;
	padding: 8px;
	cursor: pointer;
	justify-content: center;
	color: var(--bright-green);
	&:hover {
		color: var(--light-green);
	}
`;

export default ButtonSubmit;
