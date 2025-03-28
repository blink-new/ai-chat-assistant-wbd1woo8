
export type MessageRole = 'user' | 'assistant';

export interface Message {
  id: string;
  content: string;
  role: MessageRole;
  timestamp: number;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  addMessage: (content: string, role: MessageRole) => void;
  setLoading: (loading: boolean) => void;
}