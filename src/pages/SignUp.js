import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { auth, getFirestore } from "../services/firebaseConfig"; // Importando a instância do Firebase
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const navigation = useNavigation();

  const firestore = getFirestore();
  const handleSignUp = () => {
    if (senha !== confirmarSenha) {
      // Checar se as senhas coincidem
      alert("As senhas não coincidem");
      return;
    }

    // Criar usuário com email e senha
    auth
      .createUserWithEmailAndPassword(email, senha)
      .then((userCredential) => {
        // Adicionar informações adicionais ao usuário no Firestore
        const user = userCredential.user;
        firestore
          .collection("users")
          .doc(user.uid)
          .set({
            nome: nome,
            telefone: telefone,
            email: email,
          })
          .then(() => {
            console.log("Usuário cadastrado com sucesso!");
            // Você pode redirecionar o usuário para a próxima tela aqui
            navigation.navigate("Welcome");
          })
          .catch((error) => {
            console.error("Erro ao cadastrar usuário: ", error);
          });
      })
      .catch((error) => {
        console.error("Erro ao criar usuário: ", error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require("../assets/logo.png")}
          style={{ width: "35%" }}
          resizeMode="contain"
        />
      </View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Animatable.View
          animation="fadeInLeft"
          delay={500}
          style={styles.signupTitleBox}
        >
          <Text style={styles.message}>Cadastrar</Text>
        </Animatable.View>
        <Text style={styles.title}>Nome</Text>
        <TextInput
          placeholder="Digite seu nome aqui"
          style={styles.input}
          onChangeText={(text) => setNome(text)}
        />

        <Text style={styles.title}>Telefone</Text>
        <TextInput
          placeholder="Digite sua número de telefone aqui"
          style={styles.input}
          onChangeText={(text) => setTelefone(text)}
        />

        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder="Digite seu email aqui"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder="Digite uma senha aqui"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(text) => setSenha(text)}
        />

        <Text style={styles.title}>Confirmar Senha</Text>
        <TextInput
          placeholder="Confirme sua senha"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(text) => setConfirmarSenha(text)}
        />

        <Animatable.View
          animation="fadeInUp"
          delay={800}
          style={styles.buttonBox}
        >
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Confirmar</Text>
          </TouchableOpacity>
        </Animatable.View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  containerLogo: {
    flex: 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10%",
  },
  containerForm: {
    flex: 1,
    paddingStart: "10%",
    paddingEnd: "10%",
    marginBottom: "5%", // Adjusted margin bottom
  },
  signupTitleBox: {
    marginBottom: 12,
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    paddingStart: "5%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginTop: 8,
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
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonBox: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    top: "60%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
