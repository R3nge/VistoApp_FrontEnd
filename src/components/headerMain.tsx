// Importing necessary libraries and hooks
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// Defining the props for the HeaderMain component
interface HeaderMainProps {
    text: string; // Text to be displayed in the header
}

// Defining the HeaderMain component
const HeaderMain: React.FC<HeaderMainProps> = ({ text }) => {
    const navigation = useNavigation(); // Hook to enable navigation

    // Function to handle the back button press
    const handleBack = () => {
        navigation.goBack(); // Navigate back
    }

    // Rendering the HeaderMain component
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={handleBack}>
                        <MaterialCommunityIcons name="arrow-left" size={30} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.title}>
                        {text}
                    </Text>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="account" size={30} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

// Defining the styles for the HeaderMain component
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        backgroundColor: '#008015',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
    },
    content: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '92%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
});

// Exporting the HeaderMain component
export default HeaderMain;