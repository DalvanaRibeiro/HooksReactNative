import { useEffect } from 'react';
import { Alert } from 'react-native';

export function useWelcomeAlert() {
  useEffect(() => {
    Alert.alert('Bem-vindo ao Chat!', 'Aproveite a conversa!');
  }, []);
}
