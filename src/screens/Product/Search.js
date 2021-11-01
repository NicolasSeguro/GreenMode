import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

import { searchProductApi } from '../../api/search';

export default function Search(props) {
    const { route } = props;
    const { params } = route;
    const [products, setProducts] = useState(null);


    useEffect(() => {
        (async () => {
            setProducts(null);
            const response = await searchProductApi(params.search);
            setProducts(response);
        })()
    }, [params.search])

    return (
        <View>
            <Text>Buscando</Text>
        </View>
    )
}

