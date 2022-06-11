import styled from 'styled-components';

const NavLink = styled.button`
	border-radius: 0.3rem;
	border-color: var(--light-orange);
	cursor: pointer;
	padding: 0.3rem 1.5rem;
	margin-left: calc(50% - 3rem);
	justify-content: center;
	color: var(--dark-blue);
	/* background-color: var(--primary-orange); */
	background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
	opacity: 0.7;
	position: relative;
	top: 10rem;

	transition: all 2s ease-in-out;
	&:hover {
		transform: scale(1.1);
		opacity: 0.9;
	}
`;

export default NavLink;
