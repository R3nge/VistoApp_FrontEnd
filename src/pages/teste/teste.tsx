import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginButton from '../../components/mainButton';
import FormInput from '../../components/formInput';
import { showMessage } from 'react-native-flash-message';
import testeRoute from './teste.controller';
import styles from './teste.styles';

export default function Teste() {
    const [nameValue, setNameValue] = useState('');
    const navigation: any = useNavigation();

    const notify = (errorMessage: string) => {
        showMessage({
            message: errorMessage,
            type: 'danger',
            duration: 5000,
            position: 'top',
        });
    };

    const handleNameChange = (value: string) => {
        setNameValue(value);
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerForm}>
                <View style={styles.formTitle}>
                    <Text style={styles.title}>Fazer Teste</Text>
                    <Text style={styles.subtitle}>Insira seus dados para continuar</Text>
                </View>
                <View style={styles.form}>
                    <FormInput
                        placeholder="Digite seu email"
                        secureTextEntry={false}
                        onChangeText={handleNameChange}
                    />
                    <LoginButton
                        textBtn="Login"
                        onPress={async () => {
                            console.log('Before navigation:', nameValue);
                            const Success = await testeRoute(nameValue);
                            console.log('After login route:', Success);

                            if (Success) {
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
