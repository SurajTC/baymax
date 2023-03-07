import React from "react";
import {
  Container,
  Box,
  Heading,
  Flex,
  Center,
  Textarea,
  IconButton,
  Grid,
  GridItem,
  Card,
  CardBody,
  Text,
  Avatar,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const AppShell = ({ value, handleChange, handleSubmit, children }) => {
  return (
    <Container maxW="8xl" p={0}>
      <Flex direction="column" height="100vh">
        <Flex
          justifyContent="center"
          alignItems="center"
          bg="blue.400"
          w="100%"
          p={2}
        >
          <Heading>First Aid ChatBot</Heading>
        </Flex>
        <Box flexGrow={1} p={4}>
          {children}
        </Box>
        <Flex p={1} gap={2}>
          <Textarea
            value={value}
            placeholder="Enter your text here"
            resize="none"
            onChange={handleChange}
          />
          <IconButton
            alignSelf="flex-end"
            colorScheme="blue"
            aria-label="Search database"
            icon={<SearchIcon />}
            type="submit"
            onClick={handleSubmit}
          />
        </Flex>
      </Flex>
    </Container>
  );
};

export default AppShell;
