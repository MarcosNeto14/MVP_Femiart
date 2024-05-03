import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../services/firebaseConfig'; // Importe a instância de autenticação do Firebase

export default function SignIn() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleSignIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, senha); // Use a instância de autenticação do Firebase
            console.log("Usuário autenticado com sucesso!");
            // Após autenticação bem-sucedida, pode ser implementada a navegação para a próxima tela
        } catch (error) {
            console.error("Erro ao autenticar usuário:", error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation='flipInY'
                    source={require('../assets/logo.png')}
                    style={{ width: "35%" }}
                    resizeMode='contain'
                />
            </View>

            <Animatable.View
                animation='fadeInLeft'
                delay={500}
                style={styles.loginTitleBox}
            >
                <Text style={styles.message}>Login</Text>
            </Animatable.View>

            <Animatable.View
                animation='fadeInUp'
                style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder='Digite um email aqui'
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                />
                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder='Digite sua senha aqui'
                    style={styles.input}
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                />
            </Animatable.View>

            <Animatable.View
                animation='fadeInUp'
                style={styles.buttonBox}
            >
                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.buttonText}>Confirmar</Text>
                </TouchableOpacity>
            </Animatable.View>

            <Animatable.View
                animation='fadeInUp'
                delay={500}
                style={styles.buttonBox}
            >
                <TouchableOpacity
                    style={styles.buttonRegister}
                    delay={700}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={styles.registerText}>Não possui conta? Cadastre-se!</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    containerLogo: {
        flex: 2,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '10%',
    },
    containerForm: {
        flex: 1,
        paddingStart: '5%',
        paddingEnd: '5%',
        marginBottom: '55%',
    },
    loginTitleBox: {
        marginBottom: 52,
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        paddingStart: '5%',
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center'
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
        position: "absolute",
        backgroundColor: '#129063',
        borderRadius: 8,
        paddingVertical: 8,
        width: "60%",
        alignSelf: "center",
        bottom: "15%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonBox: {
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center',
        bottom: "10%",
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonRegister: {
        marginTop: 4,
        alignSelf: 'center',
    },
    registerText: {
        color: '#D68C45',
        marginBottom: 25,
        top: "150%",
        alignSelf: 'center',
    },
});
