// Importing necessary libraries and components
import React from "react";
import { useState, useEffect } from 'react';
import { View, TouchableOpacity, SafeAreaView, TextInput, FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import ListItem from "../../components/listItem";
import listProprietarioController from "./list_proprietario.controller";
import styles from "./list_proprietario.styles";

// Defining the ListProprietario component
export default function ListProprietario() {
    // Using the useNavigation hook to allow navigation between screens
    const navigation = useNavigation();

    // Using a state variable for the search text
    const [searchText, setSearchText] = useState('');

    // Defining a handler for the order click event
    const handleOrderClick = () => { };

    // Using a state variable for the list of items
    const [list, setList] = useState([]);

    // Using the useEffect hook to fetch data from the API when the component mounts
    useEffect(() => {
        // Defining an async function to fetch data from the API
        const fetchData = async () => {
            try {
                // Calling the listProprietarioController function to fetch data
                const response = await listProprietarioController();
                // Logging the received data
                console.log('Dados recebidos:', response);
                // Setting the list state variable with the received data
                setList(response); // Make sure to treat null (if it occurs) as an empty list
            } catch (error) {
                // Logging any errors that occur while fetching data
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        // Calling the fetchData function when the component mounts
        fetchData();
    }, []); // The empty array ensures that the fetch is only done once when the component mounts

    // Rendering the ListProprietario component
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchArea}>
                <TextInput
                    style={styles.input}
                    placeholder="Pesquisar Propietário"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={searchText}
                    onChangeText={(t) => setSearchText(t)}
                />
                <TouchableOpacity
                    style={styles.searchButton}
                    onPress={handleOrderClick}
                >
                    <Ionicons name="search" size={24} color={'#fff'} />
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.listP}
                data={list}
                renderItem={({ item }) => <ListItem data={item} />}
            />
        </SafeAreaView>
    );
}