import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
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
                screenOptions={({route}) => ({
                    tabBarIcon: (routeStatus) => {
                        return setIcon(route, routeStatus);
                    }
                })}
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

function setIcon(route, routeStatus) {
    let iconName = '';

    switch (route.name) {
        case 'home':
            iconName = 'home'
        break;
        case 'search':
            iconName = 'search'
            break;
        case 'cart':
            iconName = 'cart'
            break;
        case 'user':
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
