// Importing necessary libraries and components
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

// Defining the props for the DropDownTipoComodoInput component
interface DropdownInputProps {
    onChange: (selectedValue: string | null) => void; // Function to be called when a value is selected
}

// Defining the DropDownTipoComodoInput component
const DropDownTipoComodoInput: React.FC<DropdownInputProps> = ({ onChange }) => {
    // Using React useState hook for managing local state
    const [value, setValue] = useState(null); // Selected value
    const [isFocus, setIsFocus] = useState(false); // Whether the dropdown is focused

    // Data for the dropdown
    const data = [
        { label: 'Sala', value: 'Sala' },
        { label: 'Corredor', value: 'Corredor' },
        { label: 'Banheiro Social', value: 'BanheiroSocial' },
        { label: 'Banheiro', value: 'Banheiro' },
        { label: 'Quarto', value: 'Quarto' },
        { label: 'Copa', value: 'Copa' },
        { label: 'Cozinha', value: 'Cozinha' },
        { label: 'Área de Serviço', value: 'Servico' },
        { label: 'Banheiro de Serviço', value: 'BanheiroServico' },
        { label: 'Dispensa', value: 'Dispensa' },
        { label: 'Sacada', value: 'Sacada' },
        { label: 'Outro', value: 'Outro' },
    ];

    // Function to render the label of the dropdown
    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'green' }]}>
                    Tipo de Cômodo
                </Text>
            );
        }
        return null;
    };

    // Rendering the DropDownTipoComodoInput component
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
                placeholder={!isFocus ? 'Tipo de Cômodo' : '...'}
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
                        name="home"
                        size={20}
                    />
                )}
            />
        </View>
    );
};

// Exporting the DropDownTipoComodoInput component
export default DropDownTipoComodoInput;

// Defining the styles for the DropDownTipoComodoInput component
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