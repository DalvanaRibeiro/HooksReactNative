import { useState, useEffect, useCallback } from 'react';

// Define o tipo para cada pergunta do quiz
type Pergunta = {
  id: number;
  texto: string;
};

// Lista fixa de perguntas do quiz
const perguntas: Pergunta[] = [
  { id: 1, texto: 'Qual a capital do Brasil?' },
  { id: 2, texto: 'Quanto é 2 + 2?' },
  { id: 3, texto: 'Quem descobriu o Brasil?' },
];

// Hook customizado para gerenciar o estado do quiz e o tempo
export function useQuiz(tempoInicialSegundos = 60) {
  // Estado para armazenar as respostas dadas, associadas ao id da pergunta
  // Exemplo: { 1: "Brasília", 2: "4" }
  const [respostas, setRespostas] = useState<{ [key: number]: string }>({});

  // Estado para controlar o tempo restante do quiz
  const [tempoRestante, setTempoRestante] = useState(tempoInicialSegundos);

  // Estado que indica se o quiz foi finalizado (tempo acabou ou enviou respostas)
  const [finalizado, setFinalizado] = useState(false);

  // useEffect para controlar a contagem regressiva do tempo
  useEffect(() => {
    if (finalizado) return; // Se quiz finalizado, não faz nada

    if (tempoRestante === 0) {
      // Se o tempo acabou, marca quiz como finalizado
      setFinalizado(true);
      return;
    }

    // Cria um timer que decrementa o tempo a cada segundo
    const timerId = setInterval(() => {
      setTempoRestante((t) => t - 1); // decrementa tempoRestante
    }, 1000);

    // Limpa o timer quando o componente desmonta ou estado muda
    return () => clearInterval(timerId);
  }, [tempoRestante, finalizado]);

  // Função memorizada para mudar a resposta de uma pergunta, evita re-criações desnecessárias
  const mudarResposta = useCallback((id: number, texto: string) => {
    setRespostas((prev) => ({
      ...prev,
      [id]: texto, // atualiza a resposta da pergunta com o id especificado
    }));
  }, []);

  // Função memorizada para finalizar o quiz (exemplo: usuário clicou em enviar)
  const enviarRespostas = useCallback(() => {
    setFinalizado(true);
  }, []);

  // Retorna todos os dados e funções que o componente que usa o hook precisa
  return {
    perguntas,       // perguntas fixas do quiz
    respostas,       // respostas dadas até o momento
    mudarResposta,   // função para atualizar resposta
    tempoRestante,   // tempo que falta para acabar
    finalizado,      // status de finalização do quiz
    enviarRespostas, // função para finalizar o quiz
  };
}
