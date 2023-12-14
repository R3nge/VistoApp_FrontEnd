import React from "react";
import { View } from "react-native";
import HeaderMain from "../../components/headerMain";
import OptionButton from "../../components/optionButton";
import styles from './proprietario.styles';

export default function Proprietario({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <HeaderMain 
                text="Proprietários"
            />
            <View style={styles.menu}>
                <OptionButton
                    onPress={() => navigation.navigate('NovoProprietario')}
                    text="Novo Proprietário"
                    icon="plus"
                />
                <OptionButton
                    onPress={() => navigation.navigate('')}
                    text="Buscar"
                    icon="magnify"
                />
            </View>
        </View>
    );
}
