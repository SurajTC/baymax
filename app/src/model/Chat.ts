export enum Role {
  USER = "user",
  SYSTEM = "system",
  ASSISTANT = "assistant",
}

export type Message = {
  role: Role;
  content: string;
  timestamp: Date;
};
