import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import HeaderMain from '../../components/headerMain';
import LoginButton from '../../components/mainButton';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import styles from './new_componente.styles';
import newComponenteController from './new_componente.controller';
import LastVistoriaController from './last_vistoria.controller';
import LastComodoController from './last_comodo.controller';
import FormInput from '../../components/formInput';
import DropDownCorInput from '../../components/dropDownCor';
import DropDownEstadoInput from '../../components/dropDownEstado';
import DropDownMaterialInput from '../../components/dropDownMaterial';

interface LastVistoriaControllerProps {
    id: string;
    vistoriadorId: string;
    imovelId: string;
    data: string;
}

interface LastComodoControllerProps {
    id: string;
    imovelId: string;
    tipo: string;
    numero: number;
}

export default function NewComponente() {
    const navigation: any = useNavigation();

    const notify = (message: string) => {
        showMessage({
            message: message,
            type: 'danger',
            icon: 'danger',
        });
    };

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

    useEffect(() => {
        const fetchLastComodo = async () => {
            const result = await LastComodoController();
            if (result) {
                setLastComodo(result);
                console.log('Last Comodo:', result);
            } else {
                // Trate o erro aqui, se necessário
            }
        };
        fetchLastComodo();
    }, []); // O array vazio assegura que a busca só é feita uma vez ao montar o componente

    const [lastVistoria, setLastVistoria] = useState<LastVistoriaControllerProps[]>([]);
    const [lastComodo, setLastComodo] = useState<LastComodoControllerProps[]>([]);
    const [tipoValue, setTipoValue] = useState('');
    const [obsValue, setObsValue] = useState('');
    const [corValue, setCorValue] = useState('');
    const [estadoValue, setEstadoValue] = useState('');
    const [materialValue, setMaterialValue] = useState('');

    const handleTipoChange = (value: string) => {
        setTipoValue(value);
    };
    const handleObsChange = (value: string) => {
        setObsValue(value);
    }
    const handleCorChange = (value: string) => {
        setCorValue(value);
    }
    const handleEstadoChange = (value: string) => {
        setEstadoValue(value);
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <HeaderMain text="Novo Comodo" />
                <View style={styles.containerForm}>
                    <View style={styles.formTitle}>
                        <Text style={styles.title}>Crie um Componente</Text>
                        <Text style={styles.subtitle}>
                            Insira os dados para continuar:
                        </Text>
                    </View>
                    <View style={styles.form}>
                        <FormInput
                            placeholder="Tipo"
                            secureTextEntry={false}
                            onChangeText={handleTipoChange}
                        />
                        <FormInput
                            placeholder="Observação"
                            secureTextEntry={false}
                            onChangeText={handleObsChange}
                        />
                        <DropDownCorInput
                            onChange={(value) => setCorValue(value)}
                        />
                        <DropDownEstadoInput
                            onChange={(value) => setEstadoValue(value)}
                        />
                        <DropDownMaterialInput
                            onChange={(value) => setMaterialValue(value)}
                        />
                        <LoginButton
                            textBtn="Cadastrar"
                            onPress={async () => {
                                console.log(
                                    'Before navigation:',
                                    lastComodo.id,
                                    lastVistoria.id,
                                    tipoValue,
                                    obsValue,
                                    corValue,
                                    estadoValue,
                                    materialValue
                                );

                                const success = await newComponenteController(
                                    lastComodo.id,
                                    lastVistoria.id,
                                    tipoValue,
                                    obsValue,
                                    corValue,
                                    estadoValue,
                                    materialValue
                                );

                                console.log('After new componente route:', success);

                                if (success) {
                                    console.log('Componente cadastrado com sucesso!');
                                    navigation.navigate('NewComponenteSucess')
                                } else {
                                    console.log('Erro ao cadastrar Componente!');
                                    notify('Erro ao cadastrar Componente!');
                                }
                            }}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

