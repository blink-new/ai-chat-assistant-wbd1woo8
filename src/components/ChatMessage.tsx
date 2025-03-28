
import React from 'react';
import { MessageRole } from '../types/chat';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  content: string;
  role: MessageRole;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ content, role }) => {
  const isUser = role === 'user';

  return (
    <div className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className={`flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md ${isUser ? 'bg-blue-600' : 'bg-gray-100'}`}>
        {isUser ? (
          <User className="h-5 w-5 text-white" />
        ) : (
          <Bot className="h-5 w-5 text-gray-600" />
        )}
      </div>
      <div
        className={`relative flex max-w-[80%] rounded-lg px-4 py-2 text-sm ${
          isUser
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-900'
        }`}
      >
        {content}
      </div>
    </div>
  );
};