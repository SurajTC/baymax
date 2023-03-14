import { Container, Flex, Heading, Text } from "@chakra-ui/react";

interface Props {
  children: JSX.Element;
}

const AppShell = ({ children }: Props) => {
  return (
    <Container maxW="8xl" p={0} bg="Background">
      <Flex direction="column" height="100vh" py={20}>
        <Flex
          justifyContent="center"
          direction="column"
          alignItems="center"
          bg="blue.400"
          w="100%"
          p={2}
          position="fixed"
          top={0}
          zIndex="banner"
          boxShadow="base"
        >
          <Heading size="md" color="white">
            First-Aid Friend
          </Heading>
          <Text color="Background" fontSize="sm">
            Your first aid friend, anytime and anywhere!
          </Text>
        </Flex>
        {children}
      </Flex>
    </Container>
  );
};

export default AppShell;
