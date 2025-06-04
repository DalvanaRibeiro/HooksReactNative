import { useState, useEffect } from 'react';

export function useClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Atualiza a hora a cada 1 segundo
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Limpa o intervalo quando o componente desmonta
    return () => clearInterval(intervalId);
  }, []);

  return time;
}
