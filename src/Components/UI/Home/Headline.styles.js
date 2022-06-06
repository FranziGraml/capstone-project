import styled from 'styled-components';

const Headline = styled.h2`
	text-transform: uppercase;
	font-size: 2em;
	letter-spacing: 1px;
	animation: colorRotate 3s linear 0s infinite;

	@keyframes colorRotate {
		from {
			color: rgb(255, 0, 0);
		}
		16.6% {
			color: rgb(255, 0, 255);
		}
		33.3% {
			color: rgb(0, 0, 255);
		}
		50% {
			color: rgb(0, 255, 255);
		}
		66.6% {
			color: rgb(0, 255, 0);
		}
		83.3% {
			color: rgb(255, 255, 0);
		}
		to {
			color: rgb(255, 0, 0);
		}
	}
`;

export default Headline;
