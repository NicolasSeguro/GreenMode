import { StyleSheet } from "react-native";

const SearchStyle = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingBottom: 20,
        paddingHorizontal:20,
        zIndex: 1
    },
    containerInput: {
        position: 'relative',
        alignItems: 'flex-end'
    },
    backArrow: {
        position: 'absolute',
        top: 16,
        right: 0,
        color: '#70A970'
    },
    searchStyle: {
        backgroundColor: '#FFFFFF',
        borderColor: '#66A366',
        borderWidth: 1,
        borderRadius: 26,
    },
})

export default SearchStyle;