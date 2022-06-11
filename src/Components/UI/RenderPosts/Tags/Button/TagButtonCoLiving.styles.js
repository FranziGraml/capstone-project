import styled from 'styled-components';
import RenderButton from './RenderButton.styles';

const TagButtonCoLiving = styled(RenderButton)`
	background: ${props => (props.tagButtonCoLiving ? 'var(--light-orange)' : '#99B9E6')};
`;
export default TagButtonCoLiving;
