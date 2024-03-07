// Importing necessary libraries and components
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import data from './dropDownProprietario.controller'; // Importing the data fetching function

// Defining the props for the DropdownInput component
interface DropdownInputProps {
    onChange: (selectedValue: string | null) => void; // Function to be called when a value is selected
}

// Defining the DropdownInput component
const DropdownInput: React.FC<DropdownInputProps> = ({ onChange }) => {
    // Using React useState hook for managing local state
    const [value, setValue] = useState(null); // Selected value
    const [isFocus, setIsFocus] = useState(false); // Whether the dropdown is focused
    const [dropdownData, setDropdownData] = useState([]); // Data for the dropdown

    // Using React useEffect hook to fetch data when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            const result = await data(); // Fetching data
            if (result) {
                setDropdownData(result); // Setting the fetched data
            }
        };

        fetchData();
    }, []); // Dependency array is empty, so the effect runs only once

    // Function to render the label of the dropdown
    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'green' }]}>
                    Proprietário
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
                data={dropdownData}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Selecione o Proprietário' : '...'}
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
                        name="user"
                        size={20}
                    />
                )}
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