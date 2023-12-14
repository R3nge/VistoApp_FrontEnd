// estilos.ts
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    containerForm: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formTitle: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        color: '#000',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '400',
        color: '#000',
    },
    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
