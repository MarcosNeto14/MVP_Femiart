import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../services/firebaseConfig"; // Assumindo que 'db' está inicializado em firebaseConfig.js
import { doc, setDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const navigation = useNavigation(); // Para navegação entre telas

  const handleSignUp = async () => {
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem. Tente novamente.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      // Salvar informações do usuário no Firestore
      await setDoc(doc(db, "users", user.uid), {
        nome: nome,
        telefone: telefone,
        email: email,
      });

      console.log("Usuário cadastrado com sucesso:", user.uid);
      navigation.navigate("SignIn"); // Redireciona para a tela de login após o cadastro
    } catch (error) {
      console.error("Erro ao cadastrar usuário: ", error);
      alert("Erro ao cadastrar usuário. Tente novamente."); // Mensagem de erro para o usuário
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome</Text>
      <TextInput
        placeholder="Digite seu nome aqui"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.title}>Telefone</Text>
      <TextInput
        placeholder="Digite seu número de telefone aqui"
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
      />

      <Text style={styles.title}>Email</Text>
      <TextInput
        placeholder="Digite seu email aqui"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.title}>Senha</Text>
      <TextInput
        placeholder="Digite uma senha aqui"
        style={styles.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Text style={styles.title}>Confirmar Senha</Text>
      <TextInput
        placeholder="Confirme sua senha"
        style={styles.input}
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 12,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#129063",
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignUp;
