//Basic Import
import React from 'react';
import {
  TextInput,
  StyleSheet,
} from 'react-native';

import { useState } from 'react';

interface Props {
  placeholder: string;
  secureTextEntry: boolean;
  onChangeText: (value: string) => void;  // Corrigido para ser uma função
}

const FormInput: React.FC<Props> = ({ placeholder, secureTextEntry, onChangeText }) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <TextInput
      style={[styles.input, isFocus && { borderColor: 'green' }]}
      placeholder={placeholder}
      placeholderTextColor="#081f0d"
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      autoCapitalize="none"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 16,
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 16,
    borderWidth: 1.8,
    borderColor: 'lightgray',
  },
});

export default FormInput;
