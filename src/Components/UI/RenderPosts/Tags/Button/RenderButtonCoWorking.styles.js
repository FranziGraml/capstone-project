import styled from 'styled-components';
import RenderButton from './RenderButton.styles';

const RenderButtonCoWorking = styled(RenderButton)`
	background: ${props => (props.filterCoWorking ? 'var(--middle-green)' : 'var(--dark-green)')};
`;
export default RenderButtonCoWorking;
