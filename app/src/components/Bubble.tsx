import {
  Card,
  CardBody,
  Flex,
  Avatar,
  CardFooter,
  Text,
} from "@chakra-ui/react";
import { Message, Role } from "model/Chat";

interface Props {
  message: Message;
}

const Bubble = ({ message }: Props) => {
  return (
    <Flex
      my={2}
      gap={2}
      flexDir={message.role === Role.USER ? "row-reverse" : "row"}
    >
      <Avatar boxShadow="base" size="md" mt={1} name={message.role} />
      <Card
        marginLeft={message.role !== Role.USER ? 0 : 14}
        marginRight={message.role === Role.USER ? 0 : 14}
      >
        <CardBody>
          <Text>{message.content}</Text>
        </CardBody>
        <CardFooter py={1}>
          <Text
            fontSize="xs"
            textAlign={message.role === Role.USER ? "end" : "initial"}
            width="100%"
            color="GrayText"
          >
            {message.timestamp.getHours() +
              ":" +
              message.timestamp.getMinutes()}
          </Text>
        </CardFooter>
      </Card>
    </Flex>
  );
};

export default Bubble;
