import styled from 'styled-components';
import RenderButton from './RenderButton.styles';

const RenderButtonCoLiving = styled(RenderButton)`
	background: ${props => (props.filterCoLiving ? 'var(--light-orange)' : '#99B9E6')};
`;
export default RenderButtonCoLiving;
