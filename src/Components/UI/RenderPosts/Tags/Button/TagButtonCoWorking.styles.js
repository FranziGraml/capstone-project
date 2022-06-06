import styled from 'styled-components';
import RenderButton from './RenderButton.styles';

const TagButtonCoWorking = styled(RenderButton)`
	background: ${props => (props.tagButtonCoWorking ? 'var(--light-orange)' : '#99B9E6')};
`;
export default TagButtonCoWorking;
