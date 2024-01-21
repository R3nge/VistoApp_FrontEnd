import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import HeaderMain from '../../components/headerMain';
import LoginButton from '../../components/mainButton';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import DropdownInput from '../../components/dropDownImovel';
import DropDownVistoriadorInput from '../../components/dropDownVistoriador';
import styles from './new_vistoria.styles';
import newVistoriaController from './new_vistoria.controller';

export default function NewVistoria() {

    const navigation: any = useNavigation();

    const notify = (message: string) => {
        showMessage({
            message: message,
            type: 'danger',
            icon: 'danger',
        });
    };

    const [VistoriadorValue, setVistoriadorValue] = useState<string | null>(null);
    const [ImovelValue, setImovelValue] = useState<string | null>(null);

    return (
        <ScrollView>
            <View style={styles.container}>
                <HeaderMain text="Nova Vistoria" />
                <View style={styles.containerForm}>
                    <View style={styles.formTitle}>
                        <Text style={styles.title}>Inicie uma Vistoria</Text>
                        <Text style={styles.subtitle}>
                            Insira os dados para continuar:
                        </Text>
                    </View>
                    <View style={styles.form}>
                        <DropdownInput
                            onChange={(value) => setVistoriadorValue(value)}
                        />
                        <DropDownVistoriadorInput
                            onChange={(value) => setImovelValue(value)}
                        />
                        <LoginButton
                            textBtn="Cadastrar"
                            onPress={async () => {
                                console.log(
                                    'Before navigation:',
                                    VistoriadorValue,
                                    ImovelValue
                                );

                                const success = await newVistoriaController(
                                    ImovelValue,
                                    VistoriadorValue,
                                );

                                console.log('After new imovel route:', success);

                                if (success) {
                                    console.log('Imóvel cadastrado com sucesso!');
                                    navigation.navigate('NewProprietarioSucess')
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
