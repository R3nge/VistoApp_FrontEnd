import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        top: "-8%",
    },
    title: {
        width: '70%',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
        marginBottom: 40,
    },
});