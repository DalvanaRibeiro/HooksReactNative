import { useState, useCallback, useMemo } from 'react';

// Tipo para mensagem
interface Message {
  id: number;
  text: string;
  timestamp: Date;
}

// Hook customizado para gerenciar mensagens
export function useMessages() {
  // Estado para armazenar mensagens
  const [messages, setMessages] = useState<Message[]>([]);

  // Função para adicionar uma nova mensagem
  const sendMessage = useCallback((text: string) => {
    if (text.trim().length === 0) return; // Ignorar mensagens vazias

    const newMessage: Message = {
      id: Date.now(), // id único baseado no timestamp
      text,
      timestamp: new Date(),
    };

    // Atualiza o estado adicionando a nova mensagem no fim
    setMessages((prev) => [...prev, newMessage]);
  }, []);

  // Memoriza a quantidade de mensagens para evitar cálculos repetidos
  const messageCount = useMemo(() => messages.length, [messages]);

  return { messages, sendMessage, messageCount };
}
