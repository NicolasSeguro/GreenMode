import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import cart from '../screens/cart';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import home from '../screens/home';
import search from '../screens/search';
import user from '../screens/user';

const Tab = createMaterialBottomTabNavigator();

export default function mainNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                barStyle={style.navigation}
            >
                <Tab.Screen
                    name=""
                    component={home}
                />
                <Tab.Screen
                    name=""
                    component={search}
                />
                <Tab.Screen
                    name=""
                    component={cart}
                />
                <Tab.Screen
                    name=""
                    component={user}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const style = StyleSheet.create({
    navigation: {
        backgroundColor: '#8FBC8E'
    }
})
