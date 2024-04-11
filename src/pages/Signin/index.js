import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'

import React from 'react'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function SignIn() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation='flipInY'
                    source={require('../../assets/logo.png')}
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
                />
                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder='Digite sua senha aqui'
                    style={styles.input}
                />
            </Animatable.View>

            <View style={styles.buttonBox}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Confirmar</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.buttonRegister}
                onPress={() => navigation.navigate('SignUp')}
            >
                <Text style={styles.registerText}>Não possui conta? Cadastre-se!</Text>
            </TouchableOpacity>

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
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText: {
        color: '#D68C45',
        marginBottom: 25,
        alignSelf: 'center',
    },
})