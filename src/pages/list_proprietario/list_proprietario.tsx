//Basic imports
import React from "react";

import {
    useState,
    useEffect,
} from 'react';

import {
    View,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    FlatList,
} from "react-native";

import { Ionicons } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native';
import ListItem from "../../components/listItem";
import listProprietarioController from "./list_proprietario.controller";
import styles from "./list_proprietario.styles";

export default function ListProprietario() {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');
    const handleOrderClick = () => { };
    const [list, setList] = useState([]);

    useEffect(() => {
        // Função assíncrona para buscar dados da API
        const fetchData = async () => {
            try {
                const response = await listProprietarioController();
                console.log('Dados recebidos:', response);
                setList(response); // Certifica-se de tratar null (caso ocorra) como uma lista vazia
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        // Chama a função de busca quando o componente monta
        fetchData();
    }, []); // O array vazio assegura que a busca só é feita uma vez ao montar o componente



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