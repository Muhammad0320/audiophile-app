import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import InputTypeHeader from "../../ui/InputTypeHeader";
import Button from "../../ui/Button";
import Form from "../../ui/Form";

function ShippingInfo() {
  const { register, handleSubmit, reset, formState } = useForm();

  const { errors } = formState;

  const onSubmit = () => {
    reset();
  };

  return (
    <>
      <InputTypeHeader> Shipping info </InputTypeHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow
          label="Address"
          position="both"
          error={errors?.address?.message}
        >
          <Input
            id="address"
            type="text"
            placeholder="1137 williams avenue"
            {...register("address", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow label="Zip Code" position="left" error={errors?.zip?.message}>
          <Input
            id="zip"
            error={errors?.zip?.message}
            type="text"
            placeholder="420101"
            {...register("zip", {
              required: "This field is required",
              pattern: {
                value: /^[0-9]{5}(?:-[0-9]{4})?$/,
                message: "Wrong Zip code format",
              },
            })}
          />
        </FormRow>

        <FormRow label="city" position="right" error={errors?.city?.message}>
          <Input
            id="city"
            placeholder="Meddina"
            error={errors?.city?.message}
            {...register("city", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow
          label="country"
          position="left"
          error={errors?.country?.message}
        >
          <Input
            id="country"
            placeholder="Kuwait"
            error={errors?.country?.message}
            {...register("country", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <Button> Submit </Button>
      </Form>
    </>
  );
}

export default ShippingInfo;
