//Basic imports
import React from 'react';

//Styles imports
import styles from './new_comodo_sucess.styles';

//Components imports
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginButton from '../../components/mainButton';

export default function NewComponenteSucess() {

    const navigation: any = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Cômodo cadastrado com sucesso!
                </Text>
                <LoginButton
                    textBtn='Cadastrar Componentes'
                    onPress={() => navigation.navigate('NewComponente')}
                />
            </View>
        </View>
    );
}