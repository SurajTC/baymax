import { useMutation } from "react-query";
import axios from "axios";

const chatAPI = async (messages) => {
  const url = "https://api.openai.com/v1/chat/completions";

  const response = await axios.post(url, messages);
  return response.data;
};

export const UseChatAPI = ({ messages }) => {
  return useMutation("chat", chatAPI(messages));
};
