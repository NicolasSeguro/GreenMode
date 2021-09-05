import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { getBannerApi } from '../../api/home-banner';

export default function Banners() {
    const [banners, setBanners] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await getBannerApi();
            setBanners(response);
        }) ()
    }, [])
    
    return (
        <View>
            <Text style={style.text}></Text>
        </View>
    )
}

const style = StyleSheet.create ({
    text: {
        fontFamily: 'NunitoBold'
    }
})
