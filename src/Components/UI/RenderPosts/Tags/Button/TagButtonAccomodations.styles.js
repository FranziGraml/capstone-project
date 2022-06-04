import styled from 'styled-components';
import RenderButton from './RenderButton.styles';

const TagButtonAccomodations = styled(RenderButton)`
	background: ${props =>
		props.tagButtonAccomodations ? 'var(--middle-green)' : 'var(--dark-green)'};
`;
export default TagButtonAccomodations;
