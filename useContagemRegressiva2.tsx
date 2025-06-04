// Importa os hooks useEffect e useState do React
import { useEffect, useState } from "react";

// Exporta um hook personalizado chamado useContagemRegressiva
// Ele recebe um número inicial (tempoInicial) como parâmetro
export default function useContagemRegressiva(tempoInicial: number) {
  // Cria um estado chamado 'tempo' e define seu valor inicial como 'tempoInicial'
  const [tempo, setTempo] = useState(tempoInicial);

  // useEffect é executado sempre que o valor de 'tempo' muda
  useEffect(() => {
    // Se o tempo chegar a 0 ou menos, a contagem para
    if (tempo <= 0) return;

    // Cria um intervalo que diminui o tempo em 1 a cada segundo (1000 ms)
    const intervalo = setInterval(() => {
      setTempo((t) => t - 1); // Atualiza o tempo com a função que subtrai 1
    }, 1000);

    // Limpa o intervalo sempre que o efeito for reexecutado
    // Isso evita múltiplos intervalos simultâneos
    return () => clearInterval(intervalo);
  }, [tempo]); // O efeito depende do valor de 'tempo'

  // Retorna o tempo atual, que pode ser usado em qualquer componente que utilize esse hook
  return tempo;
}
