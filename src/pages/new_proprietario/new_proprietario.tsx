import React, { useState } from 'react';
import { View, Text } from 'react-native';
import HeaderMain from '../../components/headerMain';
import FormInput from '../../components/input';
import LoginButton from '../../components/button';
import styles from './new_proprietario.styles';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import newProprietarioController from './new_proprietario.controller';

export default function NovoProprietario() {
    const navigation: any = useNavigation();

    const [nameValue, setNameValue] = useState('');
    const [mailValue, setMailValue] = useState('');
    const [phoneValue, setPhoneValue] = useState('');
    const [cpfValue, setCpfValue] = useState('');
    const [enredecoId, setEnderecoIdValue] = useState('');

    const notify = (errorMessage: string) => {
        showMessage({
            message: errorMessage,
            type: 'danger',
            duration: 5000,
            position: 'top',
        });
    };

    const handleMailChange = (value: string) => {
        setMailValue(value);
    };
    const handleNameChange = (value: string) => {
        setNameValue(value);
    };
    const handlePhoneChange = (value: string) => {
        setPhoneValue(value);
    };
    const handleCpfChange = (value: string) => {
        setCpfValue(value);
    };
    const handleEnderecoIdChange = (value: string) => {
        setEnderecoIdValue(value);
    };

    return (
        <View style={styles.container}>
            <HeaderMain text="Novo Proprietário" />
            <View style={styles.containerForm}>
                <View style={styles.formTitle}>
                    <Text style={styles.title}>Cadastre um Proprietário</Text>
                    <Text style={styles.subtitle}>
                        Insira os dados para continuar
                    </Text>
                </View>
                <View style={styles.form}>
                    <FormInput
                        placeholder="Nome do Proprietário"
                        secureTextEntry={false}
                        onChangeText={handleNameChange}
                    />
                    <FormInput
                        placeholder="Email do Proprietário"
                        secureTextEntry={false}
                        onChangeText={handleMailChange}
                    />
                    <FormInput
                        placeholder="Telefone do Proprietário"
                        secureTextEntry={false}
                        onChangeText={handlePhoneChange}
                    />
                    <FormInput
                        placeholder="CPF do Proprietário"
                        secureTextEntry={false}
                        onChangeText={handleCpfChange}
                    />
                    <LoginButton
                        textBtn="Prosseguir"
                        onPress={() => navigation.navigate('NovoEndereco')}
                    />
                </View>
            </View>
        </View>
    );
}
