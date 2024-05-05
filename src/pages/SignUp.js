import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { auth } from '../../FirebaseConfig.ts';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    setLoading(true);
    try {
      if (password !== confirmPassword) {
        alert('As senhas não correspondem');
        return;
      }
      
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
      alert('Erro de cadastro')
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      {/* Seu código JSX aqui */}
    </View>
  );
}

const styles = StyleSheet.create({
  // Estilos CSS aqui
});
