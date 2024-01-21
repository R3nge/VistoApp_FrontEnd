import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  View,
} from 'react-native';

interface MeuBotaoProps {
  data: {
    name: string;
    cpf: string;
    type: string;
  };
}

const ListItem: React.FC<MeuBotaoProps> = ({ data }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <View>
        <Text>Nome: {data.name}</Text>
        <Text>CPF: {data.cpf}</Text>
        <Text>Tipo: {data.type}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ListItem;
