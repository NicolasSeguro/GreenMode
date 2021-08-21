import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

export default function mainNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name=""
                    component={}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
