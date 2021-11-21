import { Box } from "@chakra-ui/react";

export const Display = (props) => {
  return (
    <Box p="2" m="4" border="1px" borderColor="red.200" maxW="md">
      <Box>Name ---&gt; {props.kimlik.name} </Box>
      <Box>Sur Name ---&gt; {props.kimlik.surName} </Box>
      <Box>Age ---&gt; {props.kimlik.age} </Box>
      <br />
      <Box>{JSON.stringify(props.kimlik)}</Box>
    </Box>
  );
};
