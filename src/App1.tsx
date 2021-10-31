//https://stackoverflow.com/questions/17067294/html-table-with-100-width-with-vertical-scroll-inside-tbody
import { Box } from "@chakra-ui/layout";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";

export const App1 = () => {
  return (
    <Box p="32">
      <Table variant="simple" w="30vw" border="1px" borderColor="gray.300">
        <Thead display="block">
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody display="block" h="40vh" overflowY="auto" overflowX="hidden">
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td>0.91444</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td> 0.91444 </Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td>0.9144</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td>0.91444</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};
