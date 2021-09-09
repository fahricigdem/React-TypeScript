import { Container } from "@chakra-ui/layout";
import React, { useState } from "react";
import List from "./List";
import Form from "./Form";
import { VStack } from "@chakra-ui/react";

export interface IPeople {
  name: string;
  url: string;
  age: string;
  note?: string;
}

function App() {
  const [people, setPeople] = useState<IPeople[]>([
    {
      name: "Thomas Müller",
      url: "string",
      age: "24",
      note: "Nach und Nach...",
    },
    {
      name: "hayko cepkin",
      url: "string",
      age: "45",
      note: "string",
    },
  ]);

  return (
    <Container>
      <VStack>
        <List people={people} />
        <Form people={people} setPeople={setPeople} />
      </VStack>
    </Container>
  );
}
export default App;
