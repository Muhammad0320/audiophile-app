import { useState } from "react";
import RadioButton from "../../ui/RadioButton";
import { styled } from "styled-components";
import InputTypeHeader from "../../ui/InputTypeHeader";

import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import { useForm } from "react-hook-form";

const RadioButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  margin-bottom: 3rem;
`;

function PaymentDetails() {
  const [checked, setIsChecked] = useState("");

  const handleChange = (e) => {
    setIsChecked(e.target.value);
  };

  const { register, formState, handleSubmit, reset } = useForm();

  const { errors } = formState;

  const onSubmit = () => {
    reset();
  };

  return (
    <>
      <InputTypeHeader> payment details </InputTypeHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
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

        {checked === "e-money" && (
          <>
            <FormRow
              label="e-Money Number"
              position="left"
              error={errors?.money?.message}
            >
              <Input
                placeholder="729027474"
                error={errors?.money?.message}
                {...register("money", {
                  required: "This field is required",

                  maxLength: {
                    value: 9,
                    message: "e-money Number should be at most 9",
                  },
                })}
              />
            </FormRow>

            <FormRow
              label="e-Money PIN"
              error={errors?.pin?.message}
              position="right"
            >
              <Input
                placeholder="1967"
                error={errors?.pin?.message}
                {...register("pin", {
                  required: "This field is required",
                  maxLength: {
                    value: 4,
                    message: "e-money pin should be at most 4",
                  },
                })}
              />
            </FormRow>
          </>
        )}
      </Form>
    </>
  );
}

export default PaymentDetails;
