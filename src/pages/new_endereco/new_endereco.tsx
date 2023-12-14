import React, { useState } from 'react';
import { View, Text } from 'react-native';
import HeaderMain from '../../components/headerMain';
import FormInput from '../../components/input';
import LoginButton from '../../components/button';
import styles from './new_endereco.styles';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import newEnderecoController from './new_endereco.controller';

export default function NovoEndereco() {
    const navigation: any = useNavigation();

    const [ruaValue, setRuaValue] = useState('');
    const [complementoValue, setComplementoValue] = useState('');
    const [numeroValue, setNumeroValue] = useState('');
    const [bairroValue, setBairroValue] = useState('');
    const [cidadeValue, setCidadeValue] = useState('');
    const [estadoValue, setEstadoValue] = useState('');
    const [cepValue, setCepValue] = useState('');

    const notify = (errorMessage: string) => {
        showMessage({
            message: errorMessage,
            type: 'danger',
            duration: 5000,
            position: 'top',
        });
    };

    const handleRuaChange = (value: string) => {
        setRuaValue(value);
    };
    const handleComplementoChange = (value: string) => {
        setComplementoValue(value);
    };
    const handleNumeroChange = (value: string) => {
        setNumeroValue(value);
    };
    const handleBairroChange = (value: string) => {
        setBairroValue(value);
    };
    const handleCidadeChange = (value: string) => {
        setCidadeValue(value);
    };
    const handleEstadoChange = (value: string) => {
        setEstadoValue(value);
    };
    const handleCepChange = (value: string) => {
        setCepValue(value);
    };

    return (
        <View style={styles.container} >
            <HeaderMain
                text="Novo Endereço"
            />
            <View style={styles.containerForm}>
                <View style={styles.formTitle}>
                    <Text style={styles.title}>
                        Endereço do Proprietário
                    </Text>
                    <Text style={styles.subtitle}>
                        Insira os dados para continuar
                    </Text>
                </View>
                <View style={styles.form}>
                    <FormInput
                        placeholder="CEP"
                        secureTextEntry={false}
                        onChangeText={handleCepChange}
                    />
                    <FormInput
                        placeholder="Rua"
                        secureTextEntry={false}
                        onChangeText={handleRuaChange}
                    />
                    <FormInput
                        placeholder="Bairro"
                        secureTextEntry={false}
                        onChangeText={handleBairroChange}
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
                    <FormInput
                        placeholder="Cidade"
                        secureTextEntry={false}
                        onChangeText={handleCidadeChange}
                    />
                    <FormInput
                        placeholder="Estado"
                        secureTextEntry={false}
                        onChangeText={handleEstadoChange}
                    />
                    <LoginButton
                        textBtn="Cadastrar"
                        onPress={async () => {
                            console.log(
                              'Before navigation:',
                              ruaValue,
                              complementoValue,
                              numeroValue,
                              bairroValue,
                              cidadeValue,
                              estadoValue,
                              cepValue
                            );
                            if (
                              ruaValue === '' ||
                              complementoValue === '' ||
                              numeroValue === '' ||
                              bairroValue === '' ||
                              cidadeValue === '' ||
                              estadoValue === '' ||
                              cepValue === ''
                            ) {
                              notify('Preencha todos os campos');
                            } else {
                              const success = await newEnderecoController(
                                ruaValue,
                                complementoValue,
                                numeroValue,
                                bairroValue,
                                cidadeValue,
                                estadoValue,
                                cepValue
                              );
                              if (success) {
                                navigation.navigate('OutraTela'); // Substitua 'OutraTela' pelo nome da próxima tela
                              } else {
                                notify('Erro ao cadastrar endereço');
                              }
                            }
                          }}
                    />
                </View>
            </View>
        </View>
    );
}
