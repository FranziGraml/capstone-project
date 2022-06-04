import styled from 'styled-components';
import RenderButton from './RenderButton.styles';

const TagButtonCoLiving = styled(RenderButton)`
	background: ${props => (props.tagButtonCoLiving ? 'var(--middle-green)' : 'var(--dark-green)')};
`;
export default TagButtonCoLiving;
