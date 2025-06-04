import React, { useRef, useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export function UseRefExample() {
  const inputRef = useRef<TextInput>(null);
  const clickCount = useRef(0); // contagem que não causa re-render
  const [displayCount, setDisplayCount] = useState(0);

  const handleFocus = () => {
    inputRef.current?.focus(); // foca no input
  };

  const handleClick = () => {
    clickCount.current += 1; // incrementa o count
    setDisplayCount(clickCount.current); // atualiza o estado para mostrar na tela
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>UseRef Exemplo</Text>
      <TextInput
        ref={inputRef}
        placeholder="Toque no botão para focar aqui"
        style={styles.input}
      />
      <Button title="Focar no Input" onPress={handleFocus} />
      <View style={{ marginVertical: 10 }} />
      <Button title="Clique Aqui" onPress={handleClick} />
      <Text style={{ marginTop: 10 }}>Cliques sem render: {displayCount}</Text>
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
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
  },
});
