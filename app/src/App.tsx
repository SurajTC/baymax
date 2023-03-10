import { useState } from "react";
import AppShell from "components/AppShell";
import { initMsg, Message, Prompt, Role } from "model/chat";
import Bubble from "components/Bubble";
import TextBox from "components/TextBox";
import { useFormik } from "formik";
import { useChatAPI } from "hooks/useChatAPI";
import { Box } from "@chakra-ui/react";

const App = () => {
  const [history, setHistory] = useState<Message[]>([initMsg]);
  const [isLoading, setIsLoading] = useState(false);
  const { mutate: submitPrompt } = useChatAPI({ setHistory, setIsLoading });
  const formik = useFormik<Prompt>({
    initialValues: {
      content: "",
      role: Role.USER,
    },
    onSubmit: (values, { resetForm }) => {
      if (values.content.length) {
        setIsLoading(true);
        setHistory((prev) => [
          ...prev,
          { role: Role.USER, content: values.content, timestamp: new Date() },
        ]);
        resetForm();
        submitPrompt(history);
      }
    },
  });
  return (
    <AppShell>
      <>
        <Box p={4} flexGrow={1}>
          {history.map((item, index) => (
            <Bubble key={index} message={item} />
          ))}
        </Box>
        <TextBox formik={formik} isLoading={isLoading} />
      </>
    </AppShell>
  );
};

export default App;
