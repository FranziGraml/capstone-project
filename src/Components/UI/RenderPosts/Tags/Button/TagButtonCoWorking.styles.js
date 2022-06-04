import styled from 'styled-components';
import RenderButton from './RenderButton.styles';

const TagButtonCoWorking = styled(RenderButton)`
	background: ${props =>
		props.tagButtonCoWorking ? 'var(--middle-green)' : 'var(--dark-green)'};
`;
export default TagButtonCoWorking;
