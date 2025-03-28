
import React, { useEffect, useRef } from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { useChatStore } from '../store/chatStore';
import { Loader2 } from 'lucide-react';

export const ChatContainer: React.FC = () => {
  const { messages, isLoading, addMessage, setLoading } = useChatStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    addMessage(content, 'user');
    setLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      addMessage("I'm an AI assistant. I'm here to help you with your questions.", 'assistant');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex h-screen flex-col bg-white">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              content={message.content}
              role={message.role}
            />
          ))}
          {isLoading && (
            <div className="flex items-center gap-2 text-gray-500">
              <Loader2 className="h-4 w-4 animate-spin" />
              AI is thinking...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <ChatInput onSend={handleSendMessage} disabled={isLoading} />
    </div>
  );
};