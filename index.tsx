import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ScrollView } from 'react-native';
import useContagemRegressiva from '../../hooks/useContagemRegressiva';
import { UseEffectExample } from '../../hooks/useEffectAlert';

const RegistrationForm = () => {
  // Estados para os campos do formulário
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [institution, setInstitution] = useState('');
  const [profession, setProfession] = useState('');
  
  // Usando o hook de contagem regressiva (60 segundos)
  const tempoRestante = useContagemRegressiva(60);

  // Verifica se o tempo acabou
  const tempoEsgotado = tempoRestante <= 0;

  // Efeito para mostrar alerta quando o tempo acabar
  React.useEffect(() => {
    if (tempoEsgotado) {
      Alert.alert(
        'Tempo esgotado!',
        'Por favor, recarregue a página para tentar novamente.'
      );
    }
  }, [tempoEsgotado]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Componente de exemplo com useEffect */}
      <UseEffectExample />
      
      {/* Mensagem de contagem regressiva */}
      <Text style={styles.countdownText}>
        {!tempoEsgotado 
          ? `Tempo restante: ${tempoRestante} segundos` 
          : 'Tempo esgotado! Por favor, recarregue a página para tentar novamente.'}
      </Text>
      
      {/* Formulário de registro */}
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        value={username}
        onChangeText={setUsername}
        editable={!tempoEsgotado}
      />
      
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        editable={!tempoEsgotado}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Instituição"
        value={institution}
        onChangeText={setInstitution}
        editable={!tempoEsgotado}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Profissão"
        value={profession}
        onChangeText={setProfession}
        editable={!tempoEsgotado}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  countdownText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
});

export default RegistrationForm;
