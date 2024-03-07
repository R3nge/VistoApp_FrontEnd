// Importing necessary libraries and components
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import data from './dropDownImovel.controller'; // Importing data fetching function

// Defining the props for the DropDownImovelInput component
interface DropDownImovelInputProps {
    onChange: (selectedValue: string | null) => void;
}

// Defining the DropDownImovelInput component
const DropDownImovelInput: React.FC<DropDownImovelInputProps> = ({ onChange }) => {
    // Using React useState hook for managing local state
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [dropdownData, setDropdownData] = useState([]);

    // Using React useEffect hook to fetch data on component mount
    useEffect(() => {
        const fetchData = async () => {
            const result = await data(); // Fetching data
            if (result) {
                setDropdownData(result); // Setting fetched data to state
            }
        };

        fetchData();
    }, []); // Dependency array is empty, so this effect runs only once on mount

    // Function to render the label of the dropdown
    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'green' }]}>
                    Imóvel
                </Text>
            );
        }
        return null;
    };

    // Rendering the DropDownImovelInput component
    return (
        <View style={styles.container}>
            {renderLabel()}
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'green' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={dropdownData} // Using fetched data
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Selecione o Imóvel' : '...'}
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

// Exporting the DropDownImovelInput component
export default DropDownImovelInput;

// Defining the styles for the DropDownImovelInput component
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