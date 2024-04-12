import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'

import React from 'react'

import * as Animatable from 'react-native-animatable'

export default function SignUp() {
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
                animation='fadeInUp'
                style={styles.containerForm}>
                <Animatable.View
                    animation='fadeInLeft'
                    delay={500}
                    style={styles.signupTitleBox}
                >
                    <Text style={styles.message}>Cadastrar</Text>
                </Animatable.View>
                <Text style={styles.title}>Nome</Text>
                <TextInput
                    placeholder='Digite seu nome aqui'
                    style={styles.input}
                />

                <Text style={styles.title}>Telefone</Text>
                <TextInput
                    placeholder='Digite sua número de telefone aqui'
                    style={styles.input}
                />

                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder='Digite seu email aqui'
                    style={styles.input}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder='Digite uma senha aqui'
                    style={styles.input}
                />

                <Text style={styles.title}>Confirmar Senha</Text>
                <TextInput
                    placeholder='Confirme sua senha'
                    style={styles.input}
                />

                <Animatable.View
                    animation='fadeInUp'
                    delay={800}
                    style={styles.buttonBox}
                >
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Confirmar</Text>
                    </TouchableOpacity>
                </Animatable.View>

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
        paddingStart: '10%',
        paddingEnd: '10%',
        marginBottom: '95%',
    },
    signupTitleBox: {
        marginBottom: 12,
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        paddingStart: '5%',
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
        fontSize: 10,
        marginTop: 8,
    },
    input: {
        borderBottomWidth: 1,
        height: 20,
        marginBottom: 15,
        fontSize: 8,
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
        top: "60%",
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
})