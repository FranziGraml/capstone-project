import styled from 'styled-components';

const ButtonDelete = styled.button`
	border: none;
	background: none;
	display: flex;
	cursor: pointer;
	position: absolute;
	left: 19rem;
	color: var(--bright-green);
	&:hover {
		color: var(--light-green);
	}
`;

export default ButtonDelete;
