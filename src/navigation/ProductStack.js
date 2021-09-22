import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import home from '../screens/Product/Home'

const Stack = createStackNavigator();

export default function ProductStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name="home"
                component={home}
                options={{title: 'HOME'}}
            /> 
                       
        </Stack.Navigator>
        // Agregar otros stacks para poder tener el < back
    )
}
