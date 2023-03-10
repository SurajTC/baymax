import { Container, Flex, Heading, Text } from "@chakra-ui/react";

interface Props {
  children: JSX.Element;
}

const AppShell = ({ children }: Props) => {
  return (
    <Container maxW="8xl" p={0}>
      <Flex direction="column" height="100vh">
        <Flex
          justifyContent="center"
          direction="column"
          alignItems="center"
          bg="blue.400"
          w="100%"
          p={2}
        >
          <Heading size="lg" >
            First-Aid Friend
          </Heading>
          <Text color="white">
            Your first aid friend, anytime and anywhere!
          </Text>
        </Flex>
        {children}
      </Flex>
    </Container>
  );
};

export default AppShell;
