import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginButton from '../../components/button';
import FormInput from '../../components/input';
import { showMessage } from 'react-native-flash-message';
import loginRoute from './login.controller';
import styles from './login.styles';

export default function Login() {
    const [mailValue, setMailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const navigation:any = useNavigation();

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
