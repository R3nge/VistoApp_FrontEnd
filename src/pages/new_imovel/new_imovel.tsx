import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import HeaderMain from '../../components/headerMain';
import FormInput from '../../components/formInput';
import LoginButton from '../../components/mainButton';
import styles from './new_imovel.styles';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import newImovelController from './new_imovel.controller';
import DropdownInput from '../../components/dropDownProprietario';

export default function NovoImovel() {
    const navigation: any = useNavigation();

    const notify = (message: string) => {
        showMessage({
            message: message,
            type: 'danger',
            icon: 'danger',
        });
    };

    const [icmValue, setIcmValue] = useState('');
    const [tipoValue, setTipoValue] = useState('');
    const [ruaValue, setRuaValue] = useState('');
    const [complementoValue, setComplementoValue] = useState('');
    const [numeroValue, setNumeroValue] = useState('');
    const [bairroValue, setBairroValue] = useState('');
    const [cidadeValue, setCidadeValue] = useState('');
    const [estadoValue, setEstadoValue] = useState('');
    const [cepValue, setCepValue] = useState('');


    const handleIcmChange = (text: string) => {
        setIcmValue(text);
    };
    const handleTipoChange = (text: string) => {
        setTipoValue(text);
    };
    const handleRuaChange = (text: string) => {
        setRuaValue(text);
    };
    const handleComplementoChange = (text: string) => {
        setComplementoValue(text);
    };
    const handleNumeroChange = (text: string) => {
        setNumeroValue(text);
    };
    const handleBairroChange = (text: string) => {
        setBairroValue(text);
    };
    const handleCidadeChange = (text: string) => {
        setCidadeValue(text);
    };
    const handleEstadoChange = (text: string) => {
        setEstadoValue(text);
    };
    const handleCepChange = (text: string) => {
        setCepValue(text);
    };

    const [selectedDropdownValue, setSelectedDropdownValue] = useState<string | null>(null);

    return (
        <ScrollView>
            <View style={styles.container}>
                <HeaderMain text="Novo Imóvel"/>
                <View style={styles.containerForm}>
                    <View style={styles.formTitle}>
                        <Text style={styles.title}>Cadastre um Imóvel</Text>
                        <Text style={styles.subtitle}>
                            Insira os dados para continuar:
                        </Text>
                    </View>
                    <View style={styles.form}>
                        <DropdownInput
                            onChange={(value) => setSelectedDropdownValue(value)}
                        />
                        <FormInput
                            placeholder="ICM do Imóvel"
                            secureTextEntry={false}
                            onChangeText={handleIcmChange}
                        />
                        <FormInput
                            placeholder="Tipo do Imóvel"
                            secureTextEntry={false}
                            onChangeText={handleTipoChange}
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
                            placeholder="Complemento"
                            secureTextEntry={false}
                            onChangeText={handleComplementoChange}
                        />
                        <FormInput
                            placeholder="Número"
                            secureTextEntry={false}
                            onChangeText={handleNumeroChange}
                        />
                        <LoginButton
                            textBtn="Cadastrar"
                            onPress={async () => {
                                console.log(
                                    'Before navigation:',
                                    icmValue,
                                    tipoValue,
                                    ruaValue,
                                    complementoValue,
                                    parseInt(numeroValue),
                                    bairroValue,
                                    cidadeValue,
                                    estadoValue,
                                    cepValue,
                                    selectedDropdownValue
                                );

                                const success = await newImovelController(
                                    icmValue,
                                    tipoValue,
                                    ruaValue,
                                    complementoValue,
                                    3333,
                                    bairroValue,
                                    cidadeValue,
                                    estadoValue,
                                    cepValue,
                                    selectedDropdownValue
                                );

                                console.log('After new imovel route:', success);

                                if (success) {
                                    console.log('Imóvel cadastrado com sucesso!');
                                    navigation.navigate('NewProprietarioSucess');
                                } else {
                                    console.log('Erro ao cadastrar Imóvel!');
                                    notify('Erro ao cadastrar Imóvel!');
                                }
                            }}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
