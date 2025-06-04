import { useState, useEffect } from 'react';

export function useUsuarioFake() {
  const [usuario, setUsuario] = useState<string | null>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUsuario('Usuário Carregado');
      setCarregando(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return { usuario, carregando };
}
