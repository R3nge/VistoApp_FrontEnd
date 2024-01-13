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
        photo: string;
    };
}

const ListItem: React.FC<MeuBotaoProps> = ({ data }) => {
  return (
    <TouchableOpacity style={styles.item}>
        <Image 
            source={{ uri: data.photo }} 
            style={{ width: 50, height: 50 }}
        />
        <View>
            <Text>Nome: {data.name}</Text>
            <Text>CPF: {data.cpf}</Text>
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
