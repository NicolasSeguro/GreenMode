import { Image, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import ListProduct from './ListProduct'
import bannersHome from '../../Styles/home';
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
        <View style={[bannersHome.view]}>
            <View style={[bannersHome.imageColumn]}>
                <Image 
                source={require('./images/feria.png')}
                style={[bannersHome.image]}
                />
                <View style={[bannersHome.relativeText]}>
                <Text style={[bannersHome.internalText]}>
                        FERIA
                    </Text>
                </View>
                <Image source={require('./images/tienda.png')}
                style={[bannersHome.image]}
                />
                <View style={[bannersHome.relativeTienda]}>
                <Text style={[bannersHome.internalText]}>
                        TIENDA
                    </Text>
                </View>
            </View>
            <Text style={[bannersHome.text]}>PRODUCTOS RECOMENDADOS</Text>
            { products && <ListProduct products={products} />}
            <Image source={require('./images/pantalones.png')}
            style={[bannersHome.image]}
            />
            <View style={[bannersHome.relativePant]}>
                <Text style={[bannersHome.internalText]}>
                    PANTALONES
                </Text>
            </View>
            <Image source={require('./images/camisetas.png')}
            style={[bannersHome.image]}
            />
            <View style={[bannersHome.relativeCam]}>
                <Text style={[bannersHome.internalText]}>
                    CAMISAS Y CAMISETAS
                </Text>
            </View>
            <Image source={require('./images/calzados.png')}
            style={[bannersHome.image]}
            />
            <View style={[bannersHome.relativeCal]}>
                <Text style={[bannersHome.internalText]}>
                    CALZADOS
                </Text>
            </View>
            <Image source={require('./images/abrigos.png')}
            />
            <View style={[bannersHome.relativeAbr]}>
                <Text style={[bannersHome.internalText]}>
                    ABRIGOS
                </Text>
            </View>

        </View>
    )
}