import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import home from '../screens/Home';
import search from '../screens/Search';
import shoppingcart from '../screens/Cart';
import user from '../screens/User';

const Tab = createMaterialBottomTabNavigator();

export default function mainNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                barStyle={style.navigation}
                screenOptions={({route}) => ({
                    tabBarIcon: (routeStatus) => {
                        return setIcon(route, routeStatus);
                    }
                })}
            >
                <Tab.Screen
                    name="Home"
                    component={home}
                />
                <Tab.Screen
                    name="Buscar"
                    component={search}
                />
                <Tab.Screen
                    name="Carrito"
                    component={shoppingcart}
                />
                <Tab.Screen
                    name="Perfil"
                    component={user}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function setIcon(route, routeStatus) {
    let iconName = '';

    switch (route.name) {
        case 'Home':
            iconName = 'home'
        break;
        case 'Buscar':
            iconName = 'search'
            break;
        case 'Carrito':
            iconName = 'shopping-cart'
            break;
        case 'Perfil':
            iconName = 'user'
            break;
        default:
        break;
    }

    return <AwesomeIcon name={iconName} style={style.icon} />
}

const style = StyleSheet.create({
    navigation: {
        backgroundColor: '#8FBC8E'
    },
    icon: {
        fontSize: 20,
        color: '#ffffff',
    }
});
