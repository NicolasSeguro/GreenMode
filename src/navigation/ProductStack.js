import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import home from '../screens/Product/Home'
import search from '../screens/Product/Search';

const Stack = createStackNavigator();

export default function ProductStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name="home"
                component={home}
                options={{title: 'HOME'}}
            /> 
            <Stack.Screen 
                name="search"
                component={search}
                options={{title: 'Search', headerShown: false}}
            /> 
                       
        </Stack.Navigator>
        // Agregar otros stacks para poder tener el < back
    )
}
