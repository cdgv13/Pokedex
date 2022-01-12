/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RegionsStackScreen, HomeStackScreen } from './_stackNavigation';

const Tab = createBottomTabNavigator();




const _tabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
            tabBarOptions={{
                activeTintColor: 'red',
                inactiveTintColor: 'black',
            }}
        >
            <Tab.Screen name="Pokedex Home"
                component={HomeStackScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="donut-large" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name="Pokedex Pokemon" component={RegionsStackScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="map" color={color} size={size} />
                ),
            }} />
        </Tab.Navigator>
    );
};
export default _tabNavigation;
