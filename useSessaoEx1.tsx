import { useState, useEffect } from 'react';

export function useSessao(tempoInicial = 60) {
  const [tempoRestante, setTempoRestante] = useState(tempoInicial);
  const [expirado, setExpirado] = useState(false);

  useEffect(() => {
    if (tempoRestante === 0) {
      setExpirado(true);
      return;
    }

    const id = setInterval(() => {
      setTempoRestante(t => t - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [tempoRestante]);

  return { tempoRestante, expirado };
}
