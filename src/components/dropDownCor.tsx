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
const DropDownCorInput: React.FC<DropdownInputProps> = ({ onChange }) => {
    // Using React useState hook for managing local state
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    // Data for the dropdown
    const data = [
        { label: 'Transparente', value: 'Transparente' },
        { label: 'Incolor', value: 'Incolor' },
        { label: 'Branco', value: 'Branco' },
        { label: 'Branco Gelo', value: 'BrancoGelo' },
        { label: 'Rosa Açaí', value: 'RosaAcai' },
        { label: 'Rosa Azaleia', value: 'RosaAzaleia' },
        { label: 'Rubi', value: 'Rubi' },
        { label: 'Vermelho Cardinal', value: 'VermelhoCardinal' },
        { label: 'Vermelho', value: 'Vermelho' },
        { label: 'Colorado Vermelho Goya', value: 'ColoradoVermelhoGoya' },
        { label: 'Pêssego', value: 'Pessego' },
        { label: 'Flamingo', value: 'Flamingo' },
        { label: 'Laranja Cítrico', value: 'LaranjaCitrico' },
        { label: 'Laranja Imperial', value: 'LaranjaImperial' },
        { label: 'Laranja Maracatu', value: 'LaranjaMaracatu' },
        { label: 'Laranja Neon', value: 'LaranjaNeon' },
        { label: 'Terracota Suave', value: 'TerracotaSuave' },
        { label: 'Laranja', value: 'Laranja' },
        { label: 'Cerâmica', value: 'Ceramica' },
        { label: 'Marrom Conhaque Roma', value: 'MarromConhaqueRoma' },
        { label: 'Areia', value: 'Areia' },
        { label: 'Creme', value: 'Creme' },
        { label: 'Cromo Suave', value: 'CromoSuave' },
        { label: 'Ocre Colonial', value: 'OcreColonial' },
        { label: 'Ocre', value: 'Ocre' },
        { label: 'Mangaba Geada', value: 'MangabaGeada' },
        { label: 'Perola', value: 'Perola' },
        { label: 'Marfim', value: 'Marfim' },
        { label: 'Palha', value: 'Palha' },
        { label: 'Vanilla', value: 'Vanilla' },
        { label: 'Amarelo Canário', value: 'AmareloCanario' },
        { label: 'Sino', value: 'Sino' },
        { label: 'Amarelo Frevo', value: 'AmareloFrevo' },
        { label: 'Amarelo Demarcação', value: 'AmareloDemarcacao' },
        { label: 'Amarelo Segurança', value: 'AmareloSeguranca' },
        { label: 'Amarelo', value: 'Amarelo' },
        { label: 'Amarelo Padrão Wandepoxy', value: 'AmareloPadraoWandepoxy' },
        { label: 'Ouro', value: 'Ouro' },
        { label: 'Ouro Coral', value: 'OuroCoral' },
        { label: 'Amarelo Trator Verde Vale', value: 'AmareloTratorVerdeVale' },
        { label: 'Verde Vale', value: 'VerdeVale' },
        { label: 'Capim Limão', value: 'CapimLimao' },
        { label: 'Refresco', value: 'Refresco' },
        { label: 'Verde', value: 'Verde' },
        { label: 'Verde Limão Orvalho', value: 'VerdeLimaoOrvalho' },
        { label: 'Verde Primavera', value: 'VerdePrimavera' },
        { label: 'Salvia', value: 'Salvia' },
        { label: 'Mate', value: 'Mate' },
        { label: 'Verde Kiwi', value: 'VerdeKiwi' },
        { label: 'Verde Angra', value: 'VerdeAngra' },
        { label: 'Verde Nilo', value: 'VerdeNilo' },
        { label: 'Verde Claro', value: 'VerdeClaro' },
        { label: 'Verde Timbalada', value: 'VerdeTimbalada' },
        { label: 'Verde Quadra', value: 'VerdeQuadra' },
        { label: 'Verde Escolar', value: 'VerdeEscolar' },
        { label: 'Verde Folha', value: 'VerdeFolha' },
        { label: 'Verde Escuro', value: 'VerdeEscuro' },
        { label: 'Verde Colonial Verde Piscina', value: 'VerdeColonialVerdePiscina' },
        { label: 'Pavão', value: 'Pavao' },
        { label: 'Azul Piscina', value: 'AzulPiscina' },
        { label: 'Oceanic', value: 'Oceanic' },
        { label: 'Azul Praia', value: 'AzulPraia' },
        { label: 'Azul Sereno', value: 'AzulSereno' },
        { label: 'Marine', value: 'Marine' },
        { label: 'Azul Arpoador', value: 'AzulArpoador' },
        { label: 'Azul Dos Andes', value: 'AzulDosAndes' },
        { label: 'Orquídea', value: 'Orquidea' },
        { label: 'Oceano', value: 'Oceano' },
        { label: 'Azul Mar', value: 'AzulMar' },
        { label: 'Azul Segurança', value: 'AzulSeguranca' },
        { label: 'Lua Do Sertão', value: 'LuaDoSertao' },
        { label: 'Azul Profundo', value: 'AzulProfundo' },
        { label: 'Azul', value: 'Azul' },
        { label: 'Azul França', value: 'AzulFranca' },
        { label: 'Azul Del Rey Violeta', value: 'AzulDelReyVioleta' },
        { label: 'Lilás Areia Sirena', value: 'LilasAreiaSirena' },
        { label: 'Pedra Preciosa', value: 'PedraPreciosa' },
        { label: 'Cinza Alpino', value: 'CinzaAlpino' },
        { label: 'Prata', value: 'Prata' },
        { label: 'Tubarão Branco', value: 'TubaraoBranco' },
        { label: 'Platina', value: 'Platina' },
        { label: 'Cinza Médio', value: 'CinzaMedio' },
        { label: 'Cinza Padrão Wandepoxy', value: 'CinzaPadraoWandepoxy' },
        { label: 'Cinza Escuro', value: 'CinzaEscuro' },
        { label: 'Cinza Padrão Ferrolack', value: 'CinzaPadraoFerrolack' },
        { label: 'Preto Algodão Egípcio', value: 'PretoAlgodaoEgipcio' },
        { label: 'Cromio', value: 'Cromio' },
        { label: 'Bronze Lenda', value: 'BronzeLenda' },
        { label: 'Camurça', value: 'Camurca' },
        { label: 'Madeira Acinzentada', value: 'MadeiraAcinzentada' },
        { label: 'Concreto', value: 'Concreto' },
        { label: 'Alumínio', value: 'Aluminio' },
        { label: 'Tabaco', value: 'Tabaco' },
        { label: 'Vermelho Óxido', value: 'VermelhoOxido' },
        { label: 'Marrom', value: 'Marrom' },
        { label: 'Outro', value: 'Outro' },
    ];

    // Function to render the label of the dropdown
    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'green' }]}>
                    Cor
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
                placeholder={!isFocus ? 'Cor' : '...'}
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
                        name="filter"
                        size={25}
                    />
                )}
            />
        </View>
    );
};

// Exporting the DropdownInput component
export default DropDownCorInput;

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