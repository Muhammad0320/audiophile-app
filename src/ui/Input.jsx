import { css, styled } from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-white-2);
  background-color: transparent;
  padding: 1rem 1.6rem;
  caret-color: var(--color-primary);
  color: var(--color-dark);
  border-radius: 1rem;
  margin-bottom: 2rem;

  &::-webkit-input-placeholder {
    color: var(--color-dark);
    opacity: 0.7;
  }

  /* &:valid,
  &:focus {
    border: 1px solid var(--color-primary);
  } */

  ${(props) =>
    props.error &&
    css`
      border: 1px solid red;
    `}
`;

export default Input;
