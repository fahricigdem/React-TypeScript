import { VStack, Input, Box, Button } from "@chakra-ui/react";
import { useState } from "react";
let render = 0;
export const FormExample1 = (props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleKimlik({ name: value1, surName: value2, age: value3 });
    setValue1("");
    setValue2("");
    setValue3("");
  };
  return (
    <Box p="4" m="4" border="1px" borderColor="green.200">
      <form onSubmit={(e) => handleSubmit(e)}>
        <VStack spacing="2">
          <Input value={value1} onChange={(e) => setValue1(e.target.value)} />
          <Input value={value2} onChange={(e) => setValue2(e.target.value)} />
          <Input
            value={value3}
            onChange={(e) => setValue3(e.target.value)}
            type="number"
          />
          <Button type="submit">Submit</Button>
          <Box>render:{render++}</Box>
        </VStack>
      </form>
    </Box>
  );
};
