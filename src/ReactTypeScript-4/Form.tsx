import { VStack } from "@chakra-ui/layout";
import * as React from "react";
import { useState } from "react";
import { IPeople } from "./App";

import {
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
} from "@chakra-ui/react";

interface FormProps {
  people: IPeople[];
  setPeople: React.Dispatch<React.SetStateAction<IPeople[]>>;
}

const Form: React.FunctionComponent<FormProps> = ({ setPeople, people }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [age, setAge] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    setPeople([
      ...people,
      {
        name: name || "Test",
        url: url || "Test",
        age: age || "Test",
        note: note || "Test",
      },
    ]);

    setName("");
    setUrl("");
    setAge("");
    setNote("");
  };
  return (
    <VStack w={["80vw", "60vw", "50vw", "40vw"]}>
      <FormControl>
        <Input
          border="2px"
          borderColor="gray.300"
          p="2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          type="text"
          name="name"
          required
        />
      </FormControl>
      <FormControl>
        <Input
          border="2px"
          borderColor="gray.300"
          p="2"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Url"
          type="text"
          name="url"
          required
        />
      </FormControl>
      <FormControl>
        <Input
          border="2px"
          borderColor="gray.300"
          p="2"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
          type="number"
          name="age"
          required
        />
      </FormControl>
      <FormControl>
        <Input
          border="2px"
          borderColor="gray.300"
          p="2"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="note"
          type="text"
          name="note"
          required
        />
      </FormControl>

      <Button
        onClick={handleSubmit}
        colorScheme="teal"
        w={["80vw", "60vw", "50vw", "40vw"]}
      >
        Add Person
      </Button>
    </VStack>
  );
};

export default Form;
