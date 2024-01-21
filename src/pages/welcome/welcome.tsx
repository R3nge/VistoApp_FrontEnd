import React from "react";
import { View, Text, Image } from "react-native";
import LoginButton from '../../components/mainButton';
import RegisterButton from '../../components/textButton';
import styles from './welcome.styles';

const Welcome = ({ navigation }: { navigation: any }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Bem-vindo(a) ao Visto!
                </Text>
                <Text style={styles.subtitle}>
                    Aplicativo que organiza suas vistorias
                </Text>
            </View>
            <View style={styles.btn}>
                <LoginButton
                    textBtn="Login"
                    onPress={() => navigation.navigate('Login')}
                />
                <RegisterButton
                    text="Ainda não tem uma conta?"
                    textBtn="Cadastre-se"
                    onPress={() => navigation.navigate('Register')}
                />
            </View>
            <Image
                source={require('../../assets/image/bg-image.png')}
                style={{ width: '100%', height: '100%', position: 'absolute', zIndex: -1 }}
            />
        </View>
    );
};

export default Welcome;
