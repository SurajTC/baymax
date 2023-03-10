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

export interface Prompt {
  role: Role.USER;
  content: string;
}

export const SystemMsg: Message = {
  role: Role.SYSTEM,
  content: `First Aid Chat Bot`,
  timestamp: new Date(),
};

export const initMsg: Message = {
  role: Role.ASSISTANT,
  content: `Hello!`,
  timestamp: new Date(),
};
