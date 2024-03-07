// Importing necessary libraries and components
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';

// Defining the props for the ListItem component
interface MeuBotaoProps {
  data: {
    name: string; // Name of the person
    cpf: string; // CPF of the person
    type: string; // Type of the person
  };
}

// Defining the ListItem component
const ListItem: React.FC<MeuBotaoProps> = ({ data }) => {
  // Rendering the ListItem component
  return (
    <TouchableOpacity style={styles.item}>
      <View>
        <Text>Nome: {data.name}</Text> // Displaying the name
        <Text>CPF: {data.cpf}</Text> // Displaying the CPF
        <Text>Tipo: {data.type}</Text> // Displaying the type
      </View>
    </TouchableOpacity>
  );
};

// Defining the styles for the ListItem component
const styles = StyleSheet.create({
  item: {
    display: 'flex', // Using flexbox for layout
    flexDirection: 'row', // The direction of the flex items
    alignItems: 'center', // Aligning the flex items along the cross axis
    justifyContent: 'flex-start', // Aligning the flex items along the main axis
    paddingBottom: 10, // The padding below the item
    paddingTop: 10, // The padding above the item
    borderBottomWidth: 1, // The width of the border below the item
    borderBottomColor: '#ccc', // The color of the border below the item
  },
});

// Exporting the ListItem component
export default ListItem;