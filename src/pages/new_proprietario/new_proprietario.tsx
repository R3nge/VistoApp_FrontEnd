import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import HeaderMain from '../../components/headerMain';
import FormInput from '../../components/formInput';
import LoginButton from '../../components/mainButton';
import styles from './new_proprietario.styles';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import newProprietarioController from './new_proprietario.controller';
import DropdownInput from '../../components/dropDownTipoPessoa';

export default function NovoProprietario() {
    const navigation: any = useNavigation();

    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [telValue, setTelValue] = useState('');
    const [cpfValue, setCpfValue] = useState('');
    const [birthDateValue, setbirthDateValue] = useState('');
    const [cepValue, setCepValue] = useState('');
    const [estadoValue, setEstadoValue] = useState('');
    const [cidadeValue, setCidadeValue] = useState('');
    const [bairroValue, setBairroValue] = useState('');
    const [numeroValue, setNumeroValue] = useState('');
    const [complementoValue, setComplementoValue] = useState('');
    const [ruaValue, setRuaValue] = useState('');
    const [typeValue, setTypeValue] = useState('');

    const notify = (errorMessage: string) => {
        showMessage({
            message: errorMessage,
            type: 'danger',
            duration: 5000,
            position: 'top',
        });
    };

    const handleMailChange = (value: string) => {
        setEmailValue(value);
    };
    const handleNameChange = (value: string) => {
        setNameValue(value);
    };
    const handleTelChange = (value: string) => {
        setTelValue(value);
    };
    const handleCpfChange = (value: string) => {
        setCpfValue(value);
    };
    const handleDataChange = (value: string) => {
        setbirthDateValue(value);
    };
    const handleCepChange = (value: string) => {
        setCepValue(value);
    };
    const handleEstadoChange = (value: string) => {
        setEstadoValue(value);
    };
    const handleCidadeChange = (value: string) => {
        setCidadeValue(value);
    };
    const handleBairroChange = (value: string) => {
        setBairroValue(value);
    };
    const handleNumeroChange = (value: string) => {
        setNumeroValue(value);
    };
    const handleComplementoChange = (value: string) => {
        setComplementoValue(value);
    };
    const handleRuaChange = (value: string) => {
        setRuaValue(value);
    };
    const handleTypeChange = (value: string) => {
        setTypeValue(value);
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <HeaderMain text="Novo Proprietário" />
                <View style={styles.containerForm}>
                    <View style={styles.formTitle}>
                        <Text style={styles.title}>Cadastre uma Pessoa</Text>
                        <Text style={styles.subtitle}>
                            Insira os dados para continuar
                        </Text>
                    </View>
                    <View style={styles.form}>
                        <DropdownInput
                            onChange={handleTypeChange}
                        />
                        <FormInput
                            placeholder="CPF"
                            secureTextEntry={false}
                            onChangeText={handleCpfChange}
                        />
                        <FormInput
                            placeholder="Nome"
                            secureTextEntry={false}
                            onChangeText={handleNameChange}
                        />
                        <FormInput
                            placeholder="Telefone"
                            secureTextEntry={false}
                            onChangeText={handleTelChange}
                        />
                        <FormInput
                            placeholder="Email"
                            secureTextEntry={false}
                            onChangeText={handleMailChange}
                        />
                        <FormInput
                            placeholder="Data de Aniversário"
                            secureTextEntry={false}
                            onChangeText={handleDataChange}
                        />
                        <FormInput
                            placeholder="CEP"
                            secureTextEntry={false}
                            onChangeText={handleCepChange}
                        />
                        <FormInput
                            placeholder="Estado"
                            secureTextEntry={false}
                            onChangeText={handleEstadoChange}
                        />
                        <FormInput
                            placeholder="Cidade"
                            secureTextEntry={false}
                            onChangeText={handleCidadeChange}
                        />
                        <FormInput
                            placeholder="Bairro"
                            secureTextEntry={false}
                            onChangeText={handleBairroChange}
                        />
                        <FormInput
                            placeholder="Rua"
                            secureTextEntry={false}
                            onChangeText={handleRuaChange}
                        />
                        <FormInput
                            placeholder="Número"
                            secureTextEntry={false}
                            onChangeText={handleNumeroChange}
                        />
                        <FormInput
                            placeholder="Complemento"
                            secureTextEntry={false}
                            onChangeText={handleComplementoChange}
                        />
                        <LoginButton
                            textBtn="Cadastrar"
                            onPress={async () => {

                                const enderecoValue = {
                                    cep: cepValue,
                                    estado: estadoValue,
                                    cidade: cidadeValue,
                                    bairro: bairroValue,
                                    numero: parseInt(numeroValue),
                                    complemento: complementoValue,
                                    rua: ruaValue,
                                };

                                const success = await newProprietarioController(
                                    cpfValue,
                                    nameValue,
                                    telValue,
                                    emailValue,
                                    birthDateValue,
                                    typeValue,
                                    enderecoValue,
                                );
                                // const success = await newProprietarioController(cpfValue, nameValue, parseInt(telValue), emailValue, birthDateValue, typeValue, enderecoValue);
                                console.log('After new proprietor route:', success);

                                if (success) {
                                    console.log('Proprietário cadastrado com sucesso!');
                                    navigation.navigate('NewProprietarioSucess');
                                    // Realize qualquer ação adicional aqui após o sucesso
                                } else {
                                    console.log('Falha ao cadastrar o proprietário');
                                    // Lidere com a falha aqui, exibindo uma mensagem de erro, por exemplo
                                    notify('Erro ao cadastrar o proprietário');
                                }
                            }
                            }
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
