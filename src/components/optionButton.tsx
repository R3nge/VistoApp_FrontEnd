// Importing necessary libraries and components
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

// Importing icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Defining the props for the OptionButton component
interface OptionButtonProps {
    icon: any; // Icon to be displayed on the button
    text: string; // Text to be displayed below the button
    onPress: () => void; // Function to be called when the button is pressed
}

// Defining the OptionButton component
const OptionButton: React.FC<OptionButtonProps> = ({ icon, text, onPress }) => {
    // Rendering the OptionButton component
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.btn}
                onPress={onPress} // The function to be called when the button is pressed
            >
                <MaterialCommunityIcons
                    name={icon} // The icon to be displayed on the button
                    size={60} // The size of the icon
                    color="#fff" // The color of the icon
                />
            </TouchableOpacity>
            <Text style={styles.text}>
                {text} // The text to be displayed below the button
            </Text>
        </View>
    );
};

// Defining the styles for the OptionButton component
const styles = StyleSheet.create({
    container: {
        width: "33.33%",
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        width: 85,
        height: 85,
        backgroundColor: '#222',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        borderRadius: 20,
    },
    text: {
        width: 85,
        height: 40,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        paddingTop: 5,
    },
});

// Exporting the OptionButton component
export default OptionButton;