import { Image, StyleSheet, Text, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native'

import { API_URL } from '../../utils/constants'
import React from 'react'
import { map } from 'lodash'

export default function ListProduct(props) {
    const { products } = props
    return (
        <View>
            {map(products, (product) => (
                <TouchableNativeFeedback key={product.id}
                onPress={() => console.log('Ir al producto')}>
                    <View style={styles.containerProduct}>
                        <View style={styles.product}>
                            {/* <Image
                                style={styles.productImage}
                                // source={{
                                //     uri: `${API_URL}${product.main_image.url}`,
                                // }}
                                source={require('../../images/pantalones.png')}
                            /> */}
                            <Text style={styles.name}>
                                {product.title}
                            </Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            )) }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    containerProduct: {},
    product: {
        padding: 10,

    },
    productImage: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
    },
    name: {},

})