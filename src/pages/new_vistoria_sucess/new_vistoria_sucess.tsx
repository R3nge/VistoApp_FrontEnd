//Basic imports
import React from 'react';

//Styles imports
import styles from './new_vistoria_sucess.styles';

//Components imports
import { View, Text, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginButton from '../../components/mainButton';
import VariantButton from '../../components/variantButton';

export default function NewComodoSucess() {

    const navigation: any = useNavigation();

    const handleExportReport = () => {
        Linking.openURL('https://wa.link/66zm05');
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Vistoria Finalizada com Sucesso!
                </Text>
                <LoginButton
                    textBtn='Exportar Relatório'
                    onPress={handleExportReport}
                />
                <VariantButton
                    textBtn='Voltar para o Menu'
                    onPress={() => navigation.navigate('Tabs')}
                />
            </View>
        </View>
    );
}