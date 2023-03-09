import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Textarea,
} from "@chakra-ui/react";
import Bubble from "components/Bubble";
import { Message, Role } from "model/Chat";

interface Props {
  children: JSX.Element;
}

const msg: Message = {
  role: Role.USER,
  content: "blah blah blah",
  timestamp: new Date(),
};

const AppShell = ({ children }: Props) => {
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
          <Bubble message={msg} />
        </Box>
        <Flex p={1} gap={2}>
          <Textarea
            // value={value}
            placeholder="Enter your text here"
            resize="none"
            // onChange={handleChange}
          />
          <IconButton
            alignSelf="flex-end"
            colorScheme="blue"
            aria-label="Search database"
            icon={<p>X</p>}
            type="submit"
          />
        </Flex>
      </Flex>
    </Container>
  );
};

export default AppShell;
