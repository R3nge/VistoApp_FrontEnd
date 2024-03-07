// Importing necessary modules and components
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import data from './dropDownComodo.controller';

// Defining the props for the DropdownInput component
interface DropdownInputProps {
    onChange: (selectedValue: string | null) => void;
}

// Defining the DropdownInput component
const DropDownComodoInput: React.FC<DropdownInputProps> = ({ onChange }) => {
    // Defining state variables
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [dropdownData, setDropdownData] = useState([]);

    // Fetching data when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            const result = await data();
            if (result) {
                setDropdownData(result);
            }
        };

        fetchData();
    }, []); // Executing only once, no dependencies

    // Function to render the label
    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'green' }]}>
                    Cômodo
                </Text>
            );
        }
        return null;
    };

    // Rendering the component
    return (
        <View style={styles.container}>
            {renderLabel()}
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'green' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={dropdownData}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Selecione o Comodo' : '...'}
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

// Exporting the component
export default DropDownComodoInput;

// Defining the styles for the component
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
        fontSize: 18,
        color: 'gray',
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