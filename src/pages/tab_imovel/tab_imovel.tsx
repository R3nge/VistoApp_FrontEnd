import React from "react";
import { View } from "react-native";
import HeaderMain from "../../components/headerMain";
import OptionButton from "../../components/optionButton";
import styles from './tab_imovel.styles';

const Imovel = ({ navigation }: { navigation: any }) => {
    return (
        <View style={styles.container}>
            <HeaderMain
                text="Imóveis"
            />
            <View style={styles.menu}>
                <OptionButton
                    onPress={() => navigation.navigate('RegisterImovel')}
                    text="Novo Imóvel"
                    icon="plus"
                />
                <OptionButton
                    onPress={() => navigation.navigate('RegisterImovel')}
                    text="Buscar"
                    icon="magnify"
                />
            </View>
        </View>
    );
};

export default Imovel;
