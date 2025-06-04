import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export function UseStateExample() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.box}>
      <Text>useState: Contador {count}</Text>
      <Button title="Adicionar" onPress={() => setCount(count + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: { marginBottom: 30 },
});
