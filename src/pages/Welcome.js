import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground // Adicionado para possibilidade de imagem de fundo
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require('../assets/background_image.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <View style={styles.containerLogo}>
                    <Animatable.Image
                        animation='flipInY'
                        source={require('../assets/logo.png')}
                        style={{ width: "100%" }}
                        resizeMode='contain'
                    />
                </View>

                <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                    <Text style={styles.title}>Explore o talento artesanal em sua região</Text>
                    <Text style={styles.text}></Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('SignIn')}
                    >
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Adicionado para tornar o conteúdo mais legível com uma imagem de fundo
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    containerLogo: {
        flex: 2,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex: 1,
        backgroundColor: 'transparent',
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        color: "#386641",
        marginTop: 28,
        marginBottom: 12,
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    text: {
        color: 'grey'
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
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
    },
});
