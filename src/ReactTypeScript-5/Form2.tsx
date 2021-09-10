import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input, InputProps, FormControlProps, VStack } from "@chakra-ui/react";
import { Formik, Field, Form, useField } from "formik";
import * as React from "react";
import { initialValues } from "./initialValues";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("First Name is required")
    .min(5, "Must be minimum 5 digits"),
  lastName: Yup.string().required(),
});

interface BaseProps extends FormControlProps {
  name: string;
  label?: string;
  helperText?: string;
}
const ChakraFormControl: React.FC<BaseProps> = (props: BaseProps) => {
  const { children, name, label, helperText, ...rest } = props;
  const [, { error, touched }] = useField(name);

  return (
    <FormControl isInvalid={!!error && touched} {...rest}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      {children}
      {error ? (
        <FormErrorMessage>{error}</FormErrorMessage>
      ) : (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};
type InputControlProps = BaseProps & { inputProps?: InputProps };

const InputControl: React.FC<InputControlProps> = (
  props: InputControlProps
) => {
  const { name, label, inputProps, ...rest } = props;
  const [field] = useField(name);

  return (
    <FormControl name={name} label={label} {...rest}>
      <Input
        {...field}
        id={name}
        {...inputProps}
        placeholder={props.placeholder}
      />
    </FormControl>
  );
};
const Form2 = () => {
  return (
    <VStack p="3">
      <Formik
        initialValues={initialValues}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          //make async call
          console.log("Submit: ", data);
          setSubmitting(false);
        }}
        validationSchema={validationSchema}
      >
        {({ values, isSubmitting, handleSubmit }) => (
          <Form>
            <ChakraFormControl
              name="firstName"
              label="First Name"
              helperText="Your Name is required"
            >
              <InputControl name="firstName" placeholder="First Name" />
            </ChakraFormControl>

            <ChakraFormControl
              name="lastName"
              label="Last Name"
              helperText="Your Last Name is required"
            >
              <InputControl name="lastName" placeholder="Last Name" />
            </ChakraFormControl>

            <Button disabled={isSubmitting} type="submit" w="100%">
              Submit
            </Button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </VStack>
  );
};

export default Form2;

//see https://www.youtube.com/watch?v=FD50LPJ6bjE&ab_channel=BenAwad
// see github: chakra-ui-formik
// see yup npm ..> for validation
