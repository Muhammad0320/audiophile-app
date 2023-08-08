import { css, styled } from "styled-components";

const StyledInput = styled.input`
  border: 1px solid var(--color-white-2);
  background-color: transparent;
  padding: 1rem 1.6rem;

  &:valid,
  &:focus {
    border: 1px solid var(--color-primary);
  }

  ${(props) =>
    props.format === "error" &&
    css`
      border: 1px solid var(--color-primary);
    `}
`;

function Input({ format }) {
  return <StyledInput {...format} />;
}

export default Input;
