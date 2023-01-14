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
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              paddingHorizontal: 5,
              paddingTop: 0,
              backgroundColor: 'rgba(34,36,40,1)',
              position: 'absolute',
              borderTopWidth: 0,
          },
        })}> 
             <Tab.Screen name="Homescreen" component={Homescreen} 
                    options={{
                        headerShown : false,
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="graph" size={18} color={color}/>
                        ),
                        inactiveTintColor: COLOR.black,
                        activeTintColor: COLOR.white,
                    }}/>
            <Tab.Screen name="History" component={Homescreen} 
                    options={{
                        headerShown : false,
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="graph" size={18} color={color}/>
                        ),
                        inactiveTintColor: COLOR.black,
                        activeTintColor: COLOR.white,
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
