// Importing necessary libraries and hooks
import React from 'react';
import {
  TextInput,
  StyleSheet,
} from 'react-native';
import { useState } from 'react';

// Defining the props for the FormInput component
interface Props {
  placeholder: string; // Placeholder text for the input
  secureTextEntry: boolean; // Whether the input should hide the text entered (for password inputs)
  onChangeText: (value: string) => void;  // Function to be called when the text changes
}

// Defining the FormInput component
const FormInput: React.FC<Props> = ({ placeholder, secureTextEntry, onChangeText }) => {
  const [isFocus, setIsFocus] = useState(false); // State variable for whether the input is focused

  // Rendering the FormInput component
  return (
    <TextInput
      style={[styles.input, isFocus && { borderColor: 'green' }]} // The style of the input, with a green border when focused
      placeholder={placeholder} // The placeholder text
      placeholderTextColor="#081f0d" // The color of the placeholder text
      secureTextEntry={secureTextEntry} // Whether the input should hide the text entered
      onChangeText={onChangeText} // The function to be called when the text changes
      onFocus={() => setIsFocus(true)} // When the input is focused, setIsFocus is called with true
      onBlur={() => setIsFocus(false)} // When the input loses focus, setIsFocus is called with false
      autoCapitalize="none" // The input should not automatically capitalize characters
    />
  );
};

// Defining the styles for the FormInput component
const styles = StyleSheet.create({
  input: {
    width: '90%', // The width of the input
    height: 45, // The height of the input
    backgroundColor: '#fff', // The background color of the input
    borderRadius: 5, // The border radius of the input
    paddingHorizontal: 16, // The horizontal padding of the input
    fontSize: 18, // The font size of the input
    fontWeight: '400', // The font weight of the input
    marginBottom: 16, // The margin below the input
    borderWidth: 1.8, // The width of the border of the input
    borderColor: 'lightgray', // The color of the border of the input
  },
});

// Exporting the FormInput component
export default FormInput;