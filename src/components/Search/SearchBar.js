import { Animated, Keyboard, StyleSheet, View } from 'react-native'
import { AnimatedIcon, animatedTransition, animatedTransitionReset, inputAnimation, inputAnimationWidth } from './SearchAnimation'
import React, { useEffect, useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import SearchHistory from './SearchHistory'
import SearchStyle from '../../Styles/search'
import { Searchbar } from 'react-native-paper'
import { updateSearchHistoryApi } from '../../api/search'

export default function SearchBarArrow() {

    const [searchQuery, setSearchQuery] = useState('');
    const [showHistory, setShowHistory] = useState(false);

    const onChangeSearch = (query) => setSearchQuery(query) 
    
    const openSearch = () => {
        animatedTransition.start();
        setShowHistory(!showHistory)
    }

    const closeSearch = () => {
        animatedTransitionReset.start();
        Keyboard.dismiss();
        setShowHistory(!showHistory)
    }

    const onSearch = async () => {
        closeSearch();

        await updateSearchHistoryApi(searchQuery);

        navigation.push('search', {
            search: searchQuery,
        });
    };

    return (
        <View style={[SearchStyle.container]}>
            
            <View style={[SearchStyle.containerInput]}>
                <AnimatedIcon
                    name='arrow-left'
                    size={20}
                    style={[SearchStyle.backArrow]}
                    onPress={closeSearch}
                />
            </View>
            <Animated.View style={[inputAnimation, {width: inputAnimationWidth}]}>
                <Searchbar placeholder='Buscar'
                    value={searchQuery} 
                    onFocus={openSearch} 
                    style={[SearchStyle.searchStyle]}
                    onChangeText={onChangeSearch}
                    onSubmitEditing={onSearch}>
                </Searchbar>
            </Animated.View>
            <SearchHistory 
                showHistory={showHistory} 
            />
        </View>
    )
}
