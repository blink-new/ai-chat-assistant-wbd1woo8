
import { create } from 'zustand';
import { nanoid } from 'nanoid';
import { ChatState, MessageRole } from '../types/chat';

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  isLoading: false,
  addMessage: (content: string, role: MessageRole) => {
    const message = {
      id: nanoid(),
      content,
      role,
      timestamp: Date.now(),
    };
    set((state) => ({
      messages: [...state.messages, message],
    }));
  },
  setLoading: (loading: boolean) => set({ isLoading: loading }),
}));