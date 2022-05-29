import styled from 'styled-components';

const NavigationButton = styled.a`
	padding: 0;
	background: none;
	border: none;
	list-style: none;
	cursor: pointer;
	background: none;
	color: var(--bright-green);
	&:hover {
		color: var(--light-green);
	}
`;
export default NavigationButton;
