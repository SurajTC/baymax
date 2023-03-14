import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FormikProps } from "formik";
import { Prompt } from "model/chat";

interface Props {
  formik: FormikProps<Prompt>;
  isLoading: boolean;
}

const TextBox = ({ formik, isLoading }: Props) => {
  return (
    formik && (
      <Box p={4} position="fixed" bottom={0} width="100%" bg="Background">
        <Flex gap={2} alignItems="end">
          <FormControl isInvalid={false}>
            <FormLabel>Ask me anything</FormLabel>
            <Input
              id="content"
              value={formik.values.content}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Type here"
            />
            <FormErrorMessage>{formik.errors.content}</FormErrorMessage>
          </FormControl>
          <Button
            isLoading={isLoading}
            leftIcon={<p>{">"}</p>}
            type="submit"
            onClick={() => formik.handleSubmit()}
          >
            Send
          </Button>
        </Flex>
      </Box>
    )
  );
};

export default TextBox;
