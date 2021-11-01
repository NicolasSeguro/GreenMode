import { Dimensions, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import AwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { getSearchHistoryApi } from '../../api/search';
import { map } from 'lodash';

export default function SearchHistory(props) {
    const  { showHistory, onSearch } = props;
    const [history, setHistory] = useState(null);
    
    useEffect(() => {
        if (showHistory) {
            (async () => {
                const response = await getSearchHistoryApi();
                setHistory(response);
            })();
        }
    }, [showHistory])

    
    return (
        <View style={[
            showHistory ? styles.history : styles.hidden, {top: 90, left: 30}
        ]}>
            <Text style={styles.principalText}>Búsquedas principales sugeridas</Text>
            {history && (
                map(history, (item, index) => (
                  <TouchableWithoutFeedback key={index} 
                  onPress={() => onSearch(item.search)}>
                      <View style={styles.historyItem}>
                          <Text style={styles.text}>{item.search}</Text>
                          <AwesomeIcon name="arrow-right" size={16}/>
                      </View>
                  </TouchableWithoutFeedback>  
                ))
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    hidden: {
        display: 'none',
    },
    history: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    historyItem: {
        paddingRight: 90,
        paddingLeft: 20,
        paddingBottom: 10,
        paddingTop:2,
        borderWidth: 0.2,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        color: '#37422E'
    },
    principalText: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
    }
})
