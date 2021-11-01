import { Animated, Keyboard, StyleSheet, View } from 'react-native'
import { AnimatedIcon, animatedTransition, animatedTransitionReset, inputAnimation, inputAnimationWidth } from './SearchAnimation'
import { Button, TextInput } from 'react-native-paper';
import React, { useEffect, useState } from 'react'

import SearchHistory from './SearchHistory'
import SearchStyle from '../../Styles/search'
import { Searchbar } from 'react-native-paper'
import { updateSearchHistoryApi } from '../../api/search'
import { useNavigation } from '@react-navigation/native'

export default function SearchBarArrow() {

    const [searchQuery, setSearchQuery] = useState('');
    const [showHistory, setShowHistory] = useState(false);
    const navigation = useNavigation();

    const onChangeSearch = (query) => setSearchQuery(query);
    
    const openSearch = () => {
        animatedTransition.start();
        setShowHistory(!showHistory)
    };

    const closeSearch = () => {
        animatedTransitionReset.start();
        Keyboard.dismiss();
        setShowHistory(!showHistory)
    };

    const onSearch = async (reuseSearch) => {

        const isReuse = typeof reuseSearch === 'string';

        closeSearch();
        
        // Si es una nueva busqueda, actualiza el historial, sino no lo actualiza.
        !isReuse && (await updateSearchHistoryApi(searchQuery));

        navigation.push('search', {
            search: isReuse ? reuseSearch : searchQuery,
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
                onSearch={onSearch}
            />
            <View style={[SearchStyle.imageColumn]}>
            <Button 
            mode='contained'
            style={[SearchStyle.btnCategories]}
            >
                NEW IN
            </Button>
            <Button 
            mode='contained'
            style={[SearchStyle.btnCategoriesSale]}
            >
                SALE
            </Button>
            <Button 
            mode='contained'
            style={[SearchStyle.btnCategoriesTienda]}
            >
                TIENDAS
            </Button>
            <Button 
            mode='contained'
            style={[SearchStyle.btnCategoriesFeria]}
            >
                FERIAS
            </Button>
            <Button 
            mode='contained'
            style={[SearchStyle.btnCategoriesPantalones]}
            >
                PANTALONES
            </Button>
            <Button 
            mode='contained'
            style={[SearchStyle.btnCategoriesAbrigos]}
            >
                ABRIGOS
            </Button>
            </View>
        </View>
    )
}
