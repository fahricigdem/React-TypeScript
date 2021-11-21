import { Box } from "@chakra-ui/react";
import { FormExample1 } from "./FormExample1";
import { FormExample2 } from "./FormExample2";
import { Display } from "./Display";
import { useState } from "react";

let render = 0;

export const App = () => {
  const [kimlik, setKimlik] = useState({
    name: "Fahri",
    surName: "Cigdem",
    age: 36,
  });

  const boxProps = {
    p: "4",
    m: "4",
    border: "4px",
    borderColor: "red.200",
    maxW: "md",
  };

  const formProps = {
    kimlik: kimlik,
    handleKimlik: setKimlik,
  };

  return (
    <Box {...boxProps}>
      {/* <FormExample1 {...formProps} /> */}
      <FormExample2 {...formProps} />
      <Display kimlik={kimlik} />
      <Box color="red.400">render:{render++}</Box>
    </Box>
  );
};
