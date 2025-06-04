import React, { useState, useMemo } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

// Função recursiva que calcula o fatorial de um número
function fatorial(n: number): number {
  console.log('Calculando fatorial...'); // Para mostrar quando o cálculo ocorre
  if (n <= 1) return 1;
  return n * fatorial(n - 1);
}

export function UseMemoExample() {
  // Estado para armazenar o número digitado como string
  const [num, setNum] = useState('1');

  // useMemo memoriza o resultado do cálculo do fatorial
  // Só recalcula se 'num' mudar, evitando cálculo desnecessário a cada render
  const fat = useMemo(() => {
    const n = parseInt(num); // converte string para número inteiro
    if (isNaN(n) || n < 0) return 0; // trata casos inválidos
    return fatorial(n); // calcula fatorial usando a função acima
  }, [num]); // dependência: recalcula apenas quando 'num' mudar

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule o Fatorial</Text>
      <TextInput
        keyboardType="numeric" // só permite digitar números
        value={num} // valor atual do input
        onChangeText={setNum} // atualiza o estado quando o texto mudar
        style={styles.input}
      />
      <Text style={styles.result}>Fatorial: {fat}</Text> {/* Exibe resultado */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
  },
  title: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 10 
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
  },
  result: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
