import React from "react";
import { View } from "react-native";
import HeaderMain from "../../components/headerMain";
import styles from './home.styles';

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
