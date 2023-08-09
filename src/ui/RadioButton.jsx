import { styled } from "styled-components";

const RadioInput = styled.input.attrs({ type: "radio" })`
  opacity: 0;

  &:checked + span::after {
    opacity: 1;
  }
`;

const StyledRadioButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.5rem;
  height: 2.5rem;

  border: 2px solid rgba(0, 0, 0, 0.2);

  border-radius: 50%;

  &::after {
    content: "";
    height: 1.5rem;
    width: 1.5rem;
    background-color: var(--color-primary);
    border-radius: 50%;
    opacity: 0;
    transition: all 0.2s;
  }
`;

const RadioLabelContainer = styled.label`
  display: flex;
  column-gap: 2rem;
  cursor: pointer;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  padding: 1rem 0;
  width: 50%;
`;

function RadioButton({ label, checked, onChange, value }) {
  return (
    <RadioLabelContainer>
      <RadioInput checked={checked} onChange={onChange} value={value} />
      <StyledRadioButton />

      {label}
    </RadioLabelContainer>
  );
}

export default RadioButton;
