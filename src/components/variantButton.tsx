// Importing necessary libraries and components
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Defining the props for the VariantButton component
interface btnProps {
  textBtn: string; // Text to be displayed on the button
  onPress: () => void; // Function to be called when the button is pressed
}

// Defining the VariantButton component
const VariantButton: React.FC<btnProps> = ({ textBtn, onPress }) => {
  // Rendering the VariantButton component
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{textBtn}</Text> // Displaying the button text
    </TouchableOpacity>
  );
};

// Defining the styles for the VariantButton component
const styles = StyleSheet.create({
  btn: {
    width: '90%',
    height: 45,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    marginBottom: 10,
    borderWidth: 2,
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
});

// Exporting the VariantButton component
export default VariantButton;