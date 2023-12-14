import React from "react";
import { View, Text } from "react-native";
import HeaderMain from "../../components/headerMain";
import FormInput from "../../components/input";
import LoginButton from '../../components/button';
import styles from './novo_proprietario.styles';

export default function NovoProprietario({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
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
                    />
                    <FormInput
                        placeholder="Email do Proprietário"
                        secureTextEntry={false}
                    />
                    <FormInput
                        placeholder="Telefone do Proprietário"
                        secureTextEntry={false}
                    />
                    <FormInput
                        placeholder="CPF do Proprietário"
                        secureTextEntry={false}
                    />
                    <LoginButton
                        textBtn="Prosseguir"
                        onPress={() => navigation.navigate('NovoEnderecoProprietario')}
                    />
                </View>
            </View>
        </View>
    );
}
