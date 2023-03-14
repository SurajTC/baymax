import { useMutation } from "react-query";
import axios from "axios";
import { Message, Role, SystemMsg } from "model/chat";
import { removeTimestamps } from "utils";

interface Props {
  setHistory: React.Dispatch<React.SetStateAction<Message[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + import.meta.env.VITE_OPENAI_API_KEY,
};

const chatAPI = async (history: Message[]) => {
  const url = "https://api.openai.com/v1/chat/completions";

  const res = await axios.post(
    url,
    {
      model: "gpt-3.5-turbo",
      temperature: 0.6,
      messages: removeTimestamps([SystemMsg, ...history]),
    },
    {
      headers: headers,
    }
  );
  return res.data;
};

export const useChatAPI = ({ setHistory, setIsLoading }: Props) => {
  return useMutation(chatAPI, {
    onSuccess: (data) => {
      const content =
        (data && data.choices && data.choices[0].message.content) ||
        "ERROR OCCURED";
      setHistory((prev) => [
        ...prev,
        {
          role: Role.ASSISTANT,
          timestamp: new Date(),
          content,
        },
      ]);
      setIsLoading(false);
    },
  });
};
