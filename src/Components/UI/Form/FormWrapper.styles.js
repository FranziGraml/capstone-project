import styled from 'styled-components';
const FormWrapper = styled.div`
	display: ${props => (props.isAddButtonClicked ? '' : 'none')};
`;

export default FormWrapper;
