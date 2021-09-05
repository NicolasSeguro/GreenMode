import Auth from '../screens/Auth'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function PerfilStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Auth'
                component={Auth}
                options={{ title: 'MI CUENTA'}}
            />
        </Stack.Navigator>
    )
}