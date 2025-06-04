import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

export function UseEffectExample() {
  // Estado que armazena o horário atual
  const [time, setTime] = useState(new Date());

  // useEffect que exibe um alerta apenas uma vez quando o componente é montado
  useEffect(() => {
    Alert.alert('Bem-vindo!', 'Este é um app com React Native.');
  }, []); // array vazio = executa somente uma vez ao abrir

  // useEffect que atualiza o horário a cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date()); // atualiza o estado com a hora atual
    }, 1000);

    // Limpeza do intervalo quando o componente for desmontado
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Relógio Atual</Text>
      <Text style={styles.time}>
        {time.toLocaleTimeString()} {/* exibe o horário formatado */}
      </Text>
    </View>
  );
}

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
    marginBottom: 5,
  },
  time: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#27ae60',
  },
});
