import React from 'react'
import Search from '../screens/Product/Search'
import SearchBarArrow from '../components/Search/SearchBar'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function SearchStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="search"
                component={SearchBarArrow}
                options={{title: 'BÚSQUEDA'}}
            />
            <Stack.Screen 
                name="searchResults"
                component={Search}
                options={{title: 'RESULTADOS DE BÚSQUEDA'}}
            /> 
        </Stack.Navigator>
    )
}
