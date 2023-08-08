import { styled } from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;

  background-color: var(--color-white);
  color: var(--color-dark);
  padding: 5rem 3rem;
`;

const FormHeader = styled.div`
  font-size: 3.5rem;
  font-weight: 500;
  margin-bottom: 5rem;
`;

function Form({ children }) {
  return <StyledForm>{children}</StyledForm>;
}

export default Form;
