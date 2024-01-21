import React from "react";
import { View } from "react-native";
import HeaderMain from "../../components/headerMain";
import OptionButton from "../../components/optionButton";
import styles from './tab_pessoas.styles';

export default function Proprietario({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <HeaderMain
                text="Pessoas"
            />
            <View style={styles.menu}>
                <OptionButton
                    onPress={() => navigation.navigate('NovoProprietario')}
                    text="Nova Pessoa"
                    icon="account-multiple-plus"
                />
                <OptionButton
                    onPress={() => navigation.navigate('ListProprietario')}
                    text="Buscar"
                    icon="magnify"
                />
            </View>
        </View>
    );
}
