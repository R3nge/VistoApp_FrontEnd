// Importing necessary libraries and components
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

// Defining the props for the DropDownMaterialInput component
interface DropdownInputProps {
    onChange: (selectedValue: string | null) => void;
}

// Defining the DropDownMaterialInput component
const DropDownMaterialInput: React.FC<DropdownInputProps> = ({ onChange }) => {
    // Using React useState hook for managing local state
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    // Defining the data for the dropdown
    const data = [
        { label: 'Madeira', value: 'Madeira' },
        { label: 'Alvenaria', value: 'Alvenaria' },
        { label: 'Concreto', value: 'Concreto' },
        { label: 'Aço', value: 'Aco' },
        { label: 'Vidro', value: 'Vidro' },
        { label: 'Cerâmica', value: 'Ceramica' },
        { label: 'Pedra', value: 'Pedra' },
        { label: 'Gesso', value: 'Gesso' },
        { label: 'PVC', value: 'PVC' },
        { label: 'Telha', value: 'Telha' },
        { label: 'Tinta', value: 'Tinta' },
        { label: 'Carpete', value: 'Carpete' },
        { label: 'Mármore', value: 'Marmore' },
        { label: 'Granito', value: 'Granito' },
        { label: 'Laminado', value: 'Laminado' },
        { label: 'Outro', value: 'Outro' }
    ];

    // Function to render the label of the dropdown
    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'green' }]}>
                    Material
                </Text>
            );
        }
        return null;
    };

    // Rendering the DropDownMaterialInput component
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
                placeholder={!isFocus ? 'Material' : '...'}
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
                        name="codepen"
                        size={25}
                    />
                )}
            />
        </View>
    );
};

// Exporting the DropDownMaterialInput component
export default DropDownMaterialInput;

// Defining the styles for the DropDownMaterialInput component
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