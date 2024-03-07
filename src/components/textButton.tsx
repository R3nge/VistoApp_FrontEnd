// Importing necessary libraries and components
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

// Defining the props for the RegisterButton component
interface MeuBotaoProps {
    text: string; // Text to be displayed above the button
    textBtn: string; // Text to be displayed on the button
    onPress: () => void; // Function to be called when the button is pressed
}

// Defining the RegisterButton component
const RegisterButton: React.FC<MeuBotaoProps> = ({ text, textBtn, onPress }) => {
    // Rendering the RegisterButton component
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {text} // Displaying the text above the button
            </Text>
            <TouchableOpacity
                style={styles.btn}
                onPress={onPress} // The function to be called when the button is pressed
            >
                <Text style={styles.textBtn}>
                    {textBtn} // Displaying the text on the button
                </Text>
            </TouchableOpacity>
        </View>
    );
};

// Defining the styles for the RegisterButton component
const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    btn: {
        width: 'auto',
        paddingLeft: 5,
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
        textAlign: 'center',
    },
    textBtn: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    },
});

// Exporting the RegisterButton component
export default RegisterButton;