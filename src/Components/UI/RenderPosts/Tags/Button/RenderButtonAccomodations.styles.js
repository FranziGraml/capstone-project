import styled from 'styled-components';
import RenderButton from './RenderButton.styles';

const RenderButtonAccomodations = styled(RenderButton)`
	background: ${props =>
		props.filterAccomodations ? 'var(--middle-green)' : 'var(--dark-green)'};
`;
export default RenderButtonAccomodations;
