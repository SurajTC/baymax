import { Flex, Card, CardBody, Text, Avatar } from "@chakra-ui/react";

const Message = ({ role, content }) => {
  return (
    <Flex gap={2} my={2}>
      <Avatar
        mt={1}
        visibility={role == "assistant" ? "initial" : "hidden"}
        name={role}
        src="https://api.dicebear.com/5.x/bottts-neutral/svg?seed=Gracie"
      />
      <Card flexGrow={1}>
        <CardBody>
          <Text>{content}</Text>
        </CardBody>
      </Card>
      <Avatar
        mt={1}
        name={role}
        visibility={role != "assistant" ? "initial" : "hidden"}
        src="https://i.pravatar.cc/150?img=66"
      />
    </Flex>
  );
};

export default Message;
