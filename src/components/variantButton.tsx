//Basic Import
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

//Props
interface btnProps {
  textBtn: string;
  onPress: () => void;
}

const VariantButton: React.FC<btnProps> = ({ textBtn, onPress }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{textBtn}</Text>
    </TouchableOpacity>
  );
};

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

export default VariantButton;
