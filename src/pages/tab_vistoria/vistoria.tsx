// VistoriaStructure.tsx
import React from "react";
import { View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import HeaderMain from "../../components/headerMain";
import OptionButton from "../../components/optionButton";
import styles from './vistoria.styles';

export default function VistoriaStructure({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <HeaderMain
                text="Vistorias"
            />
            <View style={styles.menu}>
                <OptionButton
                    onPress={() => navigation.navigate('')}
                    text="Nova Vistoria"
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
