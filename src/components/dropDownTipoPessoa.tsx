// Importing necessary libraries and components
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

// Defining the props for the DropdownInput component
interface DropdownInputProps {
    onChange: (selectedValue: string | null) => void; // Function to be called when a value is selected
}

// Defining the DropdownInput component
const DropdownInput: React.FC<DropdownInputProps> = ({ onChange }) => {
    // Using React useState hook for managing local state
    const [value, setValue] = useState(null); // Selected value
    const [isFocus, setIsFocus] = useState(false); // Whether the dropdown is focused

    // Data for the dropdown
    const data = [
        { label: 'Proprietário', value: 'Proprietario' },
        { label: 'Vistoriador', value: 'Vistoriador' },
        { label: 'Inquilino', value: 'Inquilino' },
    ];

    // Function to render the label of the dropdown
    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'green' }]}>
                    Tipo de Pessoa
                </Text>
            );
        }
        return null;
    };

    // Rendering the DropdownInput component
    return (
        <View style={styles.container}>
            {renderLabel()}
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'green' }]} // The style of the dropdown
                placeholderStyle={styles.placeholderStyle} // The style of the placeholder
                selectedTextStyle={styles.selectedTextStyle} // The style of the selected text
                inputSearchStyle={styles.inputSearchStyle} // The style of the search input
                iconStyle={styles.iconStyle} // The style of the icon
                data={data} // The data for the dropdown
                search // Enable search functionality
                maxHeight={300} // The maximum height of the dropdown
                labelField="label" // The field in the data items to use for the label
                valueField="value" // The field in the data items to use for the value
                placeholder={!isFocus ? 'Tipo de Pessoa' : '...'} // The placeholder text
                searchPlaceholder="Pesquisar..." // The placeholder text for the search input
                value={value} // The selected value
                onFocus={() => setIsFocus(true)} // When the dropdown is focused, setIsFocus is called with true
                onBlur={() => setIsFocus(false)} // When the dropdown loses focus, setIsFocus is called with false
                onChange={item => {
                    setValue(item.value); // When a value is selected, setValue is called with the selected value
                    setIsFocus(false); // The dropdown is no longer focused
                    onChange(item.value); // The onChange prop is called with the selected value
                }}
                renderLeftIcon={() => (
                    <AntDesign
                        style={styles.icon}
                        color={isFocus ? 'green' : 'black'}
                        name="Safety"
                        size={20}
                    />
                )} // Rendering the left icon
            />
        </View>
    );
};

// Exporting the DropdownInput component
export default DropdownInput;

// Defining the styles for the DropdownInput component
const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 16,
    },
    dropdown: {
        height: 50,
        borderColor: 'lightgray',
        borderWidth: 2,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 16,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});