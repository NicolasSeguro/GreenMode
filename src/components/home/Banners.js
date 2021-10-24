import { Dimensions, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, {useEffect, useState} from 'react'

import { API_URL } from '../../utils/constants';
import { getBannerApi } from '../../api/home-banner';
import { size } from 'lodash'

const width = Dimensions.get('window').width;
const height = 160;

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
            <Text style={style.text}>Banner</Text>
        </View>
    )
}

const style = StyleSheet.create ({
    text: {
        fontFamily: 'NunitoBold'
    }
})
