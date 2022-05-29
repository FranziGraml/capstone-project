import styled from 'styled-components';

const ButtonDelete = styled.button`
	border: none;
	background: none;
	display: flex;
	padding: 5px 6px;
	cursor: pointer;
	position: absolute;
	left: 15rem;
	color: var(--bright-green);
	&:hover {
		color: var(--light-green);
	}
`;

export default ButtonDelete;
