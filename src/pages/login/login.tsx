import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';

// Rota de Login
import loginRoute from '../../router/post';
import Tabs from '../../router/routes';
// Componentes
import LoginButton from '../../components/button';
import FormInput from '../../components/input';
import RegisterButton from '../../components/textButton';

export default function Login() {
    const [mailValue, setMailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const navigation = useNavigation();

    const notify = (errorMessage: string) => {
        showMessage({
            message: errorMessage,
            type: 'danger',
            duration: 5000,
            position: 'top',
        });
    };

    const handleUserChange = (value: string) => {
        setMailValue(value);
    };

    const handlePasswordChange = (value: string) => {
        setPasswordValue(value);
    };


    return (
        <View style={styles.container}>
            <View style={styles.containerForm}>
                <View style={styles.formTitle}>
                    <Text style={styles.title}>Fazer Login</Text>
                    <Text style={styles.subtitle}>Insira seus dados para continuar</Text>
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
                            console.log('Before navigation:', mailValue, passwordValue);
                            const loginSuccess = await loginRoute(mailValue, passwordValue);
                            console.log('After login route:', loginSuccess);

                            if (loginSuccess) {
                                console.log('Navigating to Tabs');
                                navigation.navigate('Tabs');
                            } else {
                                console.log('Login failed');
                                notify('Usuário ou senha incorretos');
                            }
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