import styled from 'styled-components';
import RenderButton from './RenderButton.styles';

const RenderButtonGeneral = styled(RenderButton)`
	background: ${props => (props.filterGeneral ? 'var(--middle-green)' : 'var(--dark-green)')};
`;
export default RenderButtonGeneral;
