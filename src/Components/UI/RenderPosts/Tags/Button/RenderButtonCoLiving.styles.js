import styled from 'styled-components';
import RenderButton from './RenderButton.styles';

const RenderButtonCoLiving = styled(RenderButton)`
	background: ${props => (props.filterCoLiving ? 'var(--middle-green)' : 'var(--dark-green)')};
`;
export default RenderButtonCoLiving;
