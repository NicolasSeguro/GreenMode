import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Location from '../screens/Location';
import {NavigationContainer} from '@react-navigation/native';
import PerfilStack from './PerfilStack';
import ProductStack from './ProductStack';
import React from 'react';
// import SearchBarArrow from '../components/Search/SearchBar';
import SearchStack from './SearchStack';
import { StyleSheet } from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import search from '../screens/Product/Search';
import shoppingcart from '../screens/Cart';

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
                    name='Home'
                    component={ProductStack}
                />
                <Tab.Screen
                    name="Buscar"
                    component={SearchStack}
                />
                <Tab.Screen
                    name="Cerca de mi"
                    component={Location}
                />
                <Tab.Screen
                    name="Carrito"
                    component={shoppingcart}
                />
                <Tab.Screen
                    name="Perfil"
                    component={PerfilStack}
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
        case 'Cerca de mi':
            iconName = 'map-marker'
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
        backgroundColor: '#8FBC8E',
    },
    icon: {
        fontSize: 20,
        color: '#ffffff'
    }
});
