// Importing necessary libraries and components
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

// Defining the props for the DropdownInput component
interface DropdownInputProps {
    onChange: (selectedValue: string | null) => void;
}

// Defining the DropdownInput component
const DropDownEstadoInput: React.FC<DropdownInputProps> = ({ onChange }) => {
    // Using React useState hook for managing local state
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    // Data for the dropdown
    const data = [
        { label: 'Inédito Perfeito', value: 'IP' },
        { label: 'Inédito Avariado', value: 'IA' },
        { label: 'Novo Perfeito', value: 'NP' },
        { label: 'Novo Avariado', value: 'NA' },
        { label: 'Usado Perfeito', value: 'UP' },
        { label: 'Usado Avariado', value: 'UA' },
    ];

    // Function to render the label of the dropdown
    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'green' }]}>
                    Estado
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
                style={[styles.dropdown, isFocus && { borderColor: 'green' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Estado' : '...'}
                searchPlaceholder="Pesquisar..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                    onChange(item.value);
                }}
                renderLeftIcon={() => (
                    <AntDesign
                        style={styles.icon}
                        color={isFocus ? 'green' : 'black'}
                        name="tool"
                        size={25}
                    />
                )}
            />
        </View>
    );
};

// Exporting the DropdownInput component
export default DropDownEstadoInput;

// Defining the styles for the DropdownInput component
const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 16,
        paddingTop: 0,
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
        top: -10,
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