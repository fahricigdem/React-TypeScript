import {
  HStack,
  VStack,
  Heading,
  Box,
  Grid,
  GridItem,
  Avatar,
  Text,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import * as React from "react";
import { IPeople } from "./App";

interface ListProps {
  people: IPeople[];
}

const List: React.FunctionComponent<ListProps> = ({ people }) => {
  const renderPeople = people.map((people, index) => {
    return (
      <LinkBox key={index}>
        <Grid
          key={index}
          templateColumns={{ base: "repeat(4, 1fr)", md: "repeat(6, 1fr)" }}
          align="center"
          p="8"
          my="1"
          w="80vw"
          shadow="md"
          borderWidth="1px"
          background="teal.300"
          _hover={{
            background: "white",
            color: "teal.500",
            shadow: "xl",
          }}
          _active={{
            background: "teal.600",
            color: "teal.100",
            shadow: "xl",
          }}
        >
          <GridItem w="100%" m="auto 0">
            <Avatar src={people.url} />
          </GridItem>
          <GridItem w="100%" m="auto 0" colSpan={2}>
            <LinkOverlay href="#">
              <Heading
                fontWeight="semibold"
                textTransform="capitalize"
                textAlign="left"
                size="lg"
              >
                {people.name}
              </Heading>
            </LinkOverlay>
          </GridItem>

          <GridItem w="100%" m="auto 0">
            {people.age} years old
          </GridItem>
          <GridItem></GridItem>
          <GridItem w="100%" m="auto 0" display={{ base: "none", md: "block" }}>
            <Text>{people.note}</Text>
          </GridItem>
        </Grid>
      </LinkBox>
    );
  });

  return (
    <VStack m="8">
      <Heading>Eingeladene Personen</Heading>
      <VStack border="2px" borderColor="white" p="8">
        {renderPeople}
      </VStack>
    </VStack>
  );
};

export default List;
