import { VStack, Input, Box, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

let render = 0;

export const FormExample2 = (props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => props.handleKimlik(data);

  //console.log(errors);
  //console.log("watch:", watch("name"));

  return (
    <Box p="4" m="4" border="1px" borderColor="green.200">
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing="2">
          <Input
            defaultValue={props.kimlik.name}
            {...register("name", { required: "hey bos gecmeyelim" })}
          />
          {errors.name && <p> required field </p>}
          <Input defaultValue={props.kimlik.surName} {...register("surName")} />
          <Input
            defaultValue={props.kimlik.age}
            type="number"
            {...register("age")}
          />
          <Button type="submit">Submit</Button>
        </VStack>
      </form>
      <Box>render:{render++}</Box>
    </Box>
  );
};
