import { StyleSheet } from 'react-native';

// Defining the styles for the list_imovel component
const styles = StyleSheet.create({
    container: {
        flex: 1, // The component will take up all available space
        alignItems: "center", // Aligning items to the center horizontally
        width: '100%', // The component will take up 100% of the parent's width
        backgroundColor: '#fff', // The background color of the component
    },

    searchArea: {
        display: 'flex', // Using flexbox for layout
        flexDirection: 'row', // The main axis will be horizontal
        width: '100%', // The component will take up 100% of the parent's width
        justifyContent: 'center', // The items will be centered along the main axis
        alignItems: 'center', // The items will be centered along the cross axis
        paddingTop: 20, // Padding at the top of the component
        paddingBottom: 30, // Padding at the bottom of the component
    },

    textHeader: {
        color: '#fff', // The color of the text
        fontSize: 20, // The size of the text
        fontWeight: 'bold', // The weight of the font
        textAlign: 'center', // The text will be centered
    },

    input: {
        width: '80%', // The component will take up 80% of the parent's width
        height: 50, // The height of the component
        backgroundColor: '#fff', // The background color of the component
        borderRadius: 40, // The border radius of the component
        paddingHorizontal: 20, // Horizontal padding inside the component
        fontSize: 16, // The size of the text
        color: '#000', // The color of the text
        borderColor: '#000', // The color of the border
        borderWidth: 1, // The width of the border
    },

    searchButton: {
        display: 'flex', // Using flexbox for layout
        flexDirection: 'row', // The main axis will be horizontal
        backgroundColor: '#000', // The background color of the component
        width: 50, // The width of the component
        height: 50, // The height of the component
        borderRadius: 40, // The border radius of the component
        justifyContent: 'center', // The items will be centered along the main axis
        alignItems: 'center', // The items will be centered along the cross axis
        marginLeft: 10, // Margin to the left of the component
    },

    listP: {
        flex: 1, // The component will take up all available space
        width: '100%', // The component will take up 100% of the parent's width
    },
});

// Exporting the styles
export default styles;