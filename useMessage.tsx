import { useState, useCallback, useMemo, RefObject } from 'react';
import { TextInput } from 'react-native';

export function useMensagem(inputRef: RefObject<TextInput>) {
  const [mensagem, setMensagem] = useState<string>('');
  const [mensagens, setMensagens] = useState<string[]>([]);

  const enviar = useCallback(() => {
    if (mensagem.trim() === '') return;

    setMensagens((prevMensagens) => [...prevMensagens, mensagem]);
    setMensagem('');
    inputRef.current?.focus();
  }, [mensagem, inputRef]);

  const total = useMemo(() => mensagens.length, [mensagens]);

  return {
    mensagem,
    setMensagem,
    mensagens,
    enviar,
    total,
  };
}
