import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        width: '100%',
        backgroundColor: '#fff',
    },

    searchArea: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 30,
    },

    textHeader: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    input: {
        width: '80%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 40,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#000',
        borderColor: '#000',
        borderWidth: 1,
    },

    searchButton: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#000',
        width: 50,
        height: 50,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },

    listP: {
        flex: 1,
        width: '100%',
    },
});

export default styles;