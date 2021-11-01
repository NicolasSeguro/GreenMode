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
    btnCategories: {
        backgroundColor: '#DD9058',
        borderRadius: 30,
        color: '#FFF',
        borderColor: '#DD9058',
        borderWidth: 1,
        position: 'absolute',
        top: 240,
        width: '44%',
    },
    btnCategoriesSale: {
        backgroundColor: '#DD9058',
        borderRadius: 30,
        color: '#DD9058',
        borderColor: '#DD9058',
        borderWidth: 1,
        position: 'absolute',
        top: 240,
        right: 10,
        width: '44%',
    },
    btnCategoriesTienda: {
        backgroundColor: '#DD9058',
        borderRadius: 30,
        color: '#DD9058',
        borderColor: '#DD9058',
        borderWidth: 1,
        position: 'absolute',
        top: 300,
        width: '44%',
    },
    btnCategoriesFeria: {
        backgroundColor: '#DD9058',
        borderRadius: 30,
        color: '#DD9058',
        borderColor: '#DD9058',
        borderWidth: 1,
        position: 'absolute',
        top: 300,
        right: 10,
        width: '44%',
    },
    btnCategoriesPantalones: {
        backgroundColor: '#DD9058',
        borderRadius: 30,
        color: '#DD9058',
        borderColor: '#DD9058',
        borderWidth: 1,
        position: 'absolute',
        top: 360,
        width: '44%',
    },
    btnCategoriesAbrigos: {
        backgroundColor: '#DD9058',
        borderRadius: 30,
        color: '#DD9058',
        borderColor: '#DD9058',
        borderWidth: 1,
        position: 'absolute',
        top: 360,
        right: 10,
        width: '44%',
    },
    imageColumn: {
        flexDirection: 'row'
    },
    borderHistory: {
        borderWidth: 1,
        borderColor: '#66A366',
    },
})

export default SearchStyle;