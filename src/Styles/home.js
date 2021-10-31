import { StyleSheet } from "react-native"

const bannersHome = StyleSheet.create ( {
    view: {
        flex: 1,
        resizeMode: 'contain',
    },
    text: {
        fontFamily: 'Nunito',
        fontSize: 22,
        textAlign: 'center',
        color: '#DD9058',
    },
    image: {
        marginBottom: 10,
    },
    imageColumn: {
        flexDirection: 'row'
    },   
    internalText: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold',
    },
    relativeText: {
        position: 'absolute',
        top: 40,
        left: 60,
    },
    relativeTienda: {
        position: 'absolute',
        top: 40,
        right: 60,
    },
    relativePant: {
        position: 'relative',
        bottom: 70,
        left: 110,
    },
    relativeCam: {
        position: 'relative',
        bottom: 70,
        left: 80,
    },
    relativeCal: {
        position: 'relative',
        bottom: 70,
        left: 130,
    },
    relativeAbr: {
        position: 'relative',
        bottom: 60,
        left: 140,
    },
})

export default bannersHome;