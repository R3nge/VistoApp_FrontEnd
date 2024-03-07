//Basic imports
import React from 'react';

//Styles imports
import styles from './new_componente_sucess.styles';

//Components imports
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginButton from '../../components/mainButton';
import VariantButton from '../../components/variantButton';

export default function NewComodoSucess() {

    const navigation: any = useNavigation();

    function handleNavigateToTabs() {
        navigation.navigate('ListProprietario');
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Componente cadastrado com sucesso!
                </Text>
                <LoginButton
                    textBtn='Cadastrar outro Componente'
                    onPress={() => navigation.navigate('NewComponente')}
                />
                <VariantButton
                    textBtn='Ir para Próximo Cômodo'
                    onPress={() => navigation.navigate('NewComodo')}
                />
                <VariantButton
                    textBtn='Finalizar Vistoria'
                    onPress={() => navigation.navigate('NewVistoriaSucess')}
                />
            </View>
        </View>
    );
}