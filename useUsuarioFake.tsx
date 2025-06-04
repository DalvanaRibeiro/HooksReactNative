import { useState, useEffect } from 'react';

export function useUsuarioFake(): string {
  const [nome, setNome] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setNome('Usuário logado!');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return nome;
}
