import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

import { getLastProductsApi } from '../../api/product'

export default function NewProducts() {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await getLastProductsApi(2);
            setProducts(response);
        })()
    }, [])

    return (
        <View>
            <Text>Hola</Text>
        </View>
    )
}
