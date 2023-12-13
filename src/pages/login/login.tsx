

//Navigation Import
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importe useNavigation para obter o objeto de navegação
import Toast from 'react-native-toast-message';

// Rotas
import loginRoute from "../../router/post";
// Components Import
import LoginButton from "../../components/button";
import FormInput from "../../components/input";
import RegisterButton from "../../components/textButton";
import { SetStateAction, useState, ChangeEvent } from 'react';
import { useRoute } from "@react-navigation/native";
import React from 'react';

export default function Login({ navigation }: { navigation: any }) {
    const [mailValue, setMailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const router = useRoute();
    const notify = (errorMessage: string) => {
        Toast.show({
            type: 'error',
            text1: errorMessage,
            position: 'top',
            autoHide: true,
            visibilityTime: 5000,  // Ajuste o tempo conforme necessário
        });
    };


    const handleUserChange = (value: string) => {
        setMailValue(value);
    };

    const handlePasswordChange = (value: string) => {
        setPasswordValue(value);
    };

    return (
        <View style={styles.container} >
            <View style={styles.containerForm}>
                <View style={styles.formTitle}>
                    <Text style={styles.title}>
                        Fazer Login
                    </Text>
                    <Text style={styles.subtitle}>
                        Insira seus dados para continuar
                    </Text>
                </View>
                <View style={styles.form}>
                    <FormInput
                        placeholder="Digite seu email"
                        secureTextEntry={false}
                        onChangeText={handleUserChange}
                    />
                    <FormInput
                        placeholder="Digite sua senha"
                        secureTextEntry={true}
                        onChangeText={handlePasswordChange}
                    />
                    <LoginButton
                        textBtn="Login"
                        onPress={async () => {
                            const loginSuccess = await loginRoute(mailValue, passwordValue);
                            if (loginSuccess) {
                                router.navigate('Tabs');
                            } else {
                                notify('User ou password incorretos');
                            }
                        }}
                    />
                    <RegisterButton
                        text="Não tem conta?"
                        textBtn="Cadastre-se"
                        onPress={async () => {
                            router.navigate('cadastro')
                        }}
                    />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    containerForm: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formTitle: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        color: '#000',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '400',
        color: '#000',
    },
    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

});