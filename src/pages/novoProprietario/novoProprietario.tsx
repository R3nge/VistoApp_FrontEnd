import React from "react";
import { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";

import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HeaderMain from "../../components/headerMain";
import FormInput from "../../components/input";

import LoginButton from '../../components/button';
import RegisterButton from '../../components/textButton';



import CreatePropietario from "../../router/post";

export default function NovoProprietario({ navigation } : { navigation: any}) {
    const [nameValue, setNameValue] = useState('');
    const [mailValue, setMailValue] = useState('');
    const [phoneValue, setPhoneValue] = useState('');
    const [cpfValue, setCpfValue] = useState('');

    const handleNameChange = (value: string) => {
        setNameValue(value);
    };
    const handleMailChange = (value: string) => {
        setMailValue(value);
    };
    const handlePhoneChange = (value: string) => {
        setPhoneValue(value);
    };
    const handleCpfChange = (value: string) => {
        setCpfValue(value);
    };

    return (
        <View style={styles.container} >
            <HeaderMain
                text="Novo Proprietário"
            />
            <View style={styles.containerForm}>
                <View style={styles.formTitle}>
                    <Text style={styles.title}>
                        Cadastre um Proprietário
                    </Text>
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
                        onChangeText={(value: string) => { console.log(value) }}
                    />
                    <FormInput
                        placeholder="CPF do Proprietário"
                        secureTextEntry={false}
                        onChangeText={handlePhoneChange}
                    />
                    <LoginButton
                        textBtn="Prosseguir"
                        onPress={async () => {
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
        flexDirection: 'column',
    },

    containerForm: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 40,
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