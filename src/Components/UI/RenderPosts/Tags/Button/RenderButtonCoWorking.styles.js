import styled from 'styled-components';
import RenderButton from './RenderButton.styles';

const RenderButtonCoWorking = styled(RenderButton)`
	background: ${props => (props.filterCoWorking ? 'var(--light-orange)' : '#99B9E6')};
`;
export default RenderButtonCoWorking;
