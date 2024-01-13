//Basic imports
import React from 'react';

//Styles imports
import styles from './styles';

//Components imports
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderMain from '../../components/headerMain';
import LoginButton from '../../components/mainButton';
import VariantButton from '../../components/variantButton';
import RegisterButton from '../../components/textButton';

export default function NewProprietarioSucess() {
    const navigation:any = useNavigation();

    function handleNavigateToTabs() {
        navigation.navigate('Tabs');
    }

    return (
        <View style={styles.container}>
            <HeaderMain
                text='Cadastro Concluído'
            />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Proprietário cadastrado com sucesso!
                </Text>
                <LoginButton
                    textBtn='Voltar para o menu'
                    onPress={handleNavigateToTabs}
                />
                <VariantButton
                    textBtn='Cadastrar outro proprietário'
                    onPress={() => navigation.navigate('NewProprietario')}
                />
                <RegisterButton
                    text='Ou então acesse a'
                    textBtn='lista de cadastros'
                    onPress={handleNavigateToTabs}
                />
            </View>
        </View>
    );
}