import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import db from "../services/firebaseConfigs";

export default function SignUp() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleSignUp = () => {
    if (senha !== confirmarSenha) {
      // Senhas não coincidem
      return;
    }

    db.collection("users")
      .add({
        nome,
        telefone,
        email,
        senha,
      })
      .then(() => {
        console.log("Usuário cadastrado com sucesso!");
        // Aqui você pode redirecionar o usuário para outra tela ou fazer outras ações
      })
      .catch((error) => {
        console.error("Erro ao cadastrar usuário: ", error);
      });
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
