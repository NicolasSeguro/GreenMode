import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { FormStyles } from '../../Styles'
import ListProduct from './ListProduct'
import { getLastProductsApi } from '../../api/product'

export default function NewProducts() {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await getLastProductsApi(4);
            setProducts(response);
        })();
    }, []);

    return (
        <View style={[style.view]}>
            <View style={style.imageColumn}>
                <Image source={require('./images/feria.png')}
                style={style.image}
                />
                <Image source={require('./images/tienda.png')}
                style={style.image}
                />
            </View>
            <Text style={style.text}>PRODUCTOS RECOMENDADOS</Text>
            { products && <ListProduct products={products} />}
            <Image source={require('./images/pantalones.png')}
            style={style.image}
            />
            <Image source={require('./images/camisetas.png')}
            style={style.image}
            />
            <Image source={require('./images/calzados.png')}
            style={style.image}
            />
            <Image source={require('./images/abrigos.png')}
            />

        </View>
    )
}

const style = StyleSheet.create ({
    view: {
        flex: 1,
        resizeMode: 'contain',
    },
    text: {
        fontFamily: 'NunitoBold',
        fontSize: 22,
        textAlign: 'center',
        color: '#DD9058',
    },
    image: {
        marginBottom: 10,
    },
    imageColumn: {
        flexDirection: 'row'
    }

})