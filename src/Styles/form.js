import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import colors from "./colors";

const FormStyles = StyleSheet.create({
    view: {
        marginHorizontal: 20,
    },
    input: {
        marginBottom: 20,
    },
    btnSucces: {
        padding: 5,
        backgroundColor: colors.primary,
    },
    btnText: {
        marginTop: 10,
        fontSize: 18,
        color: '#37422E'
    },
    btnTextLabel: {
        color: '#000',
    }, 
    boxModel: {
        marginTop: 10,
        
    },
    btnRegister: {
        backgroundColor: '#DD9058',
        borderRadius: 30,
        color: '#fff',
    }

})

export default FormStyles;