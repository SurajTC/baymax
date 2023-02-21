// import { useState } from "react";

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

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
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
            <Grid templateColumns="auto 1fr auto" gap={2} rowGap={6}>
              <GridItem>
                <Avatar
                  mt={1}
                  visibility="hidden"
                  name="John"
                  src="https://i.pravatar.cc/150?img=66"
                />
              </GridItem>
              <GridItem justifySelf="end">
                <Card>
                  <CardBody>
                    <Text>
                      I have got a cut on my hand and it's bleeding, what to do?
                    </Text>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem>
                <Avatar
                  mt={1}
                  name="John"
                  src="https://i.pravatar.cc/150?img=66"
                />
              </GridItem>
              {/*  */}
              <GridItem>
                <Avatar
                  mt={1}
                  name="Bot"
                  src="https://api.dicebear.com/5.x/bottts-neutral/svg?seed=Gracie"
                />
              </GridItem>
              <GridItem justifySelf="start">
                <Card>
                  <CardBody>
                    <Text>
                      I can assist you with the first aid procedure for your
                      wound! <br />
                      <br />
                      Bleeding from small cuts and grazes can be controlled by
                      applying pressure to the cut using a clean, non-fluffy pad
                      (preferably a sterile dressing, if you have one). You
                      should also raise the injured body part above the level of
                      the heart so the bleeding slows down and stops. <br />
                      If the bleeding continues you should seek medical help or
                      call 911.
                    </Text>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem>
                <Avatar
                  mt={1}
                  visibility="hidden"
                  name="Bot"
                  src="https://i.pravatar.cc/150?img=66"
                />
              </GridItem>
              {/*  */}
              <GridItem>
                <Avatar
                  mt={1}
                  visibility="hidden"
                  name="John"
                  src="https://i.pravatar.cc/150?img=66"
                />
              </GridItem>
              <GridItem justifySelf="end">
                <Card>
                  <CardBody>
                    <Text>
                      Thank you! That worked and the bleeding is stopped.
                    </Text>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem>
                <Avatar
                  mt={1}
                  name="John"
                  src="https://i.pravatar.cc/150?img=66"
                />
              </GridItem>

              {/*  */}
              <GridItem>
                <Avatar
                  mt={1}
                  name="Bot"
                  src="https://api.dicebear.com/5.x/bottts-neutral/svg?seed=Gracie"
                />
              </GridItem>
              <GridItem justifySelf="start">
                <Card>
                  <CardBody>
                    <Text>
                      That sounds great! It is my pleasure to assist you.
                    </Text>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem>
                <Avatar
                  mt={1}
                  visibility="hidden"
                  name="Bot"
                  src="https://i.pravatar.cc/150?img=66"
                />
              </GridItem>
            </Grid>
          </Box>
          <Flex p={1} gap={2}>
            <Textarea placeholder="Enter your text here" resize="none" />
            <IconButton
              alignSelf="flex-end"
              colorScheme="blue"
              aria-label="Search database"
              icon={<SearchIcon />}
            />
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}

export default App;
