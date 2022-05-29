import styled from 'styled-components';
const FormWrapper = styled.div`
	display: ${props => (props.isFormActive ? '' : 'none')};
`;

export default FormWrapper;
