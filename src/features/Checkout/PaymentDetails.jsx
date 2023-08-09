import { useState } from "react";
import RadioButton from "../../ui/RadioButton";
import { styled } from "styled-components";
import InputTypeHeader from "../../ui/InputTypeHeader";

import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Form from "../../ui/Form";

const RadioButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;

function PaymentDetails() {
  const [checked, setIsChecked] = useState("");

  const handleChange = (e) => {
    setIsChecked(e.target.value);
  };

  console.log(checked);

  return (
    <>
      <InputTypeHeader> payment details </InputTypeHeader>
      <Form>
        <FormRow label="payment method" position="left">
          <Input type="hidden" />
        </FormRow>

        <FormRow position="right">
          <RadioButtonsContainer>
            <RadioButton
              value="e-money"
              checked={checked === "e-money"}
              label="e-money"
              onChange={handleChange}
            />
            <RadioButton
              value="cash"
              checked={checked === "cash"}
              label="Cash on Delivery"
              onChange={handleChange}
            />
          </RadioButtonsContainer>
        </FormRow>
      </Form>
    </>
  );
}

export default PaymentDetails;
