import React, { useState, useCallback } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

// Componente funcional que demonstra o uso de useCallback
export function UseCallbackExample() {
  const [count, setCount] = useState(0); // Estado para armazenar o valor do contador

  // Função memorizada que incrementa o contador
  const increment = useCallback(() => {
    setCount(c => c + 1); // Atualiza o estado com base no valor anterior
  }, []); // Dependências vazias: a função não será recriada em re-renderizações

  // Função memorizada que decrementa o contador
  const decrement = useCallback(() => {
    setCount(c => c - 1); // Atualiza o estado com base no valor anterior
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>UseCallback Contador</Text>

      {/* Mostra o valor atual do contador */}
      <Text style={styles.count}>{count}</Text>

      {/* Botões para somar e subtrair */}
      <View style={styles.buttons}>
        <Button title="+ Somar" onPress={increment} color="#27ae60" />
        <Button title="- Subtrair" onPress={decrement} color="#c0392b" />
      </View>
    </View>
  );
}

// Estilização do componente
const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  count: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttons: {
    flexDirection: 'row',
    width: 150,
    justifyContent: 'space-between',
  },
});
