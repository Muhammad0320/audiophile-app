import { css, styled } from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 2rem;
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.label`
  color: var(--color-dark);
  font-size: 1.5rem;
  font-weight: 500;

  ${(error) =>
    error.type === "error" &&
    css`
      color: red;
    `}
`;

const Error = styled.span`
  color: red;
  font-size: 1.5rem;
  font-weight: 400;
`;

function FormRow({ children, error, label }) {
  return (
    <StyledFormRow>
      <LabelContainer>
        {label && <Label> {label} </Label>}
        {label && error && <Label type="error"> </Label>}
        {error && <Error> {error} </Error>}
      </LabelContainer>

      {children}
    </StyledFormRow>
  );
}

export default FormRow;
