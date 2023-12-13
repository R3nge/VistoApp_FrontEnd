//Basic Import
import React from 'react';
import {
  TextInput,
  StyleSheet,
} from 'react-native';

interface MeuBotaoProps {
  placeholder: string;
  secureTextEntry: boolean;
  onChangeText: (value: string) => void;  // Corrigido para ser uma função
}

const FormInput: React.FC<MeuBotaoProps> = ({ placeholder, secureTextEntry, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#003f5c"
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}  // Corrigido para usar onChangeText
      autoCapitalize="none"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 16,
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 16,
    elevation: 1,
    borderWidth: 1.8,
    borderColor: 'lightgray',
  },
});

export default FormInput;
