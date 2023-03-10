import { Message } from "model/chat";

export const removeTimestamps = (m: Message[]) =>
  m.map((i) => ({
    content: i.content,
    role: i.role,
  }));
