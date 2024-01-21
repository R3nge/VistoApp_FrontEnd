import React from "react";
import { View } from "react-native";
import HeaderMain from "../../components/headerMain";
import styles from './tab_home.styles';

const Home = () => {
    return (
        <View style={styles.container}>
            <HeaderMain 
                text="Home"
            />
        </View>
    );
};

export default Home;
