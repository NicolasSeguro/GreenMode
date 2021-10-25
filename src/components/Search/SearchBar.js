import { Animated, Keyboard, StyleSheet, View } from 'react-native'
import { AnimatedIcon, animatedTransition, animatedTransitionReset, inputAnimation, inputAnimationWidth } from './SearchAnimation'
import React, { useEffect, useState } from 'react'

import { Searchbar } from 'react-native-paper'

export default function SearchBarArrow() {

    const openSearch = () => {
        animatedTransition.start();
    }

    const closeSearch = () => {
        animatedTransitionReset.start();
        Keyboard.dismiss();
    }

    return (
        <View style={styles.container}>
            
            <View style={styles.containerInput}>
                <AnimatedIcon
                    name='arrow-left'
                    size={20}
                    style={styles.backArrow}
                    onPress={closeSearch}
                />
            </View>
            <Animated.View style={[inputAnimation, {width: inputAnimationWidth}]}>
                <Searchbar placeholder='Buscar' onFocus={openSearch}></Searchbar>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#000',
        paddingVertical: 40,
        paddingHorizontal:20,
        zIndex: 1
    },
    containerInput: {
        position: 'relative',
        alignItems: 'flex-end'
    },
    backArrow: {
        position: 'absolute',
        top: 10,
        right: 0,
        color: '#fff'
    },
})
