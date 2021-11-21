import { VStack, Input, Box, Button, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

let render = 0;

export const FormExample2 = (props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    getValues,
  } = useForm({ mode: "onBlur" });

  //const { ...methods } = useForm();
  //console.log(methods);

  const onSubmit = (data) => props.handleKimlik(data);

  console.log(errors);
  //console.log("watch:", watch("name"));
  //console.log("watch:", watch("surName"));
  //console.log("watch:", watch("age"));
  //console.log(getValues("name"));

  return (
    <Box p="4" m="4" border="1px" borderColor="green.200">
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing="2">
          <Input
            defaultValue={props.kimlik.name}
            {...register("name", {
              required: "hey bos gecmeyelim!",
              maxLength: {
                value: 8,
                message: "oha cok uzun oldu beya!", // JS only: <p>error message</p> TS only support string
              },
            })}
          />
          {errors.name && <Text color="red.500">{errors.name.message} </Text>}
          <Input defaultValue={props.kimlik.surName} {...register("surName")} />
          <Input
            defaultValue={props.kimlik.age}
            //type="number"
            {...register("age", {
              required: "yas bilgisi mecburidir!",
              //setValueAs: (v) => parseInt(v),
              validate: {
                onsekiz: (value) => value > 17 || "18 yas alti olmaz!",
                altmis: (value) => value < 60 || "60 yas ve üstü olmaz!",
              },
            })}
          />
          {errors.age && <Text color="red.500">{errors.age.message} </Text>}
          <Button type="submit">Submit</Button>
        </VStack>
      </form>
      <Box>render:{render++}</Box>
    </Box>
  );
};
