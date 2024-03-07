import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import HeaderMain from '../../components/headerMain';
import LoginButton from '../../components/mainButton';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import DropDownImovelInput from '../../components/dropDownImovel';
import DropDownTipoComodoInput from '../../components/dropDownTipoComodo';
import styles from './new_comodo.styles';
import newComodoController from './new_comodo.controller';
import LastVistoriaController from './last_vistoria.controller';

interface LastVistoriaControllerProps {
    id: string;
    vistoriadorId: string;
    imovelId: string;
    data: string;
}

export default function NewComodo() {
    const navigation: any = useNavigation();

    const notify = (message: string) => {
        showMessage({
            message: message,
            type: 'danger',
            icon: 'danger',
        });
    };

    const [TipoValue, setTipoValue] = useState<string | null>(null);
    const [lastVistoria, setLastVistoria] = useState<LastVistoriaControllerProps[]>([]);

    useEffect(() => {
        const fetchLastVistoria = async () => {
            const result = await LastVistoriaController();
            if (result) {
                setLastVistoria(result);
                console.log('Last Vistoria:', result);
            } else {
                // Trate o erro aqui, se necessário
            }
        };
        fetchLastVistoria();
    }, []); // O array vazio assegura que a busca só é feita uma vez ao montar o componente


    return (
        <ScrollView>
            <View style={styles.container}>
                <HeaderMain text="Novo Comodo" />
                <View style={styles.containerForm}>
                    <View style={styles.formTitle}>
                        <Text style={styles.title}>Crie um Cômodo</Text>
                        <Text style={styles.subtitle}>
                            Insira os dados para continuar:
                        </Text>
                    </View>
                    <View style={styles.form}>
                        <DropDownTipoComodoInput
                            onChange={(value) => setTipoValue(value)}
                        />
                        <LoginButton
                            textBtn="Cadastrar"
                            onPress={async () => {
                                console.log(
                                    'Before navigation:',
                                    lastVistoria.imovelId,
                                    TipoValue
                                );
                                const success = await newComodoController(
                                    lastVistoria.imovelId,
                                    TipoValue
                                );

                                console.log('After new imovel route:', success);

                                if (success) {
                                    console.log('Comodo Cadastrado com Sucesse!');
                                    navigation.navigate('NewComodoSucess')
                                } else {
                                    console.log('Erro ao cadastrar Cômodo!');
                                    notify('Erro ao cadastrar Cômodo!');
                                }
                            }}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

