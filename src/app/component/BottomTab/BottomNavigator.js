//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../../screens/Home/homescreen';
import {COLOR} from '@constant';
import Icon from 'react-native-vector-icons/Octicons';

// create a component
const BottomNavigator = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" 
                    component={Homescreen} 
                    options={{
                        headerShown : false,
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="home" size={18} color={color}/>
                        ),
                        inactiveTintColor: COLOR.black,
                        activeTintColor: COLOR.blue,
                    }}/>
            <Tab.Screen name="History" component={Homescreen} 
                    options={{
                        headerShown : false,
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="graph" size={18} color={color}/>
                        ),
                        inactiveTintColor: COLOR.black,
                        activeTintColor: COLOR.blue,
                    }}/>
                    
        </Tab.Navigator>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default BottomNavigator;
