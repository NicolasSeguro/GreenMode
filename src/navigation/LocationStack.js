import Location from '../screens/Location';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function LocationStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="location"
                component={Location}
                options={{title: 'CERCA DE MI'}}
            />         
        </Stack.Navigator>
    )
}
