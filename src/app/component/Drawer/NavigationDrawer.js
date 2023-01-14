//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomNavigator} from '@component';
// import BottomNavigator from '../BottomTab/BottomNavigator';

import {COLOR} from '@constant';


// create a component
const NavigationDrawer = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Homescreen"
                component={BottomNavigator}
                drawerContentOptions={{
                    activeTintColor: COLOR.progressBlue,
                    itemStyle: {marginVertical: 5},
                }}
                //drawerContent={<HomeHeader/>} 
                options={{
                    title: 'Hey , Raju kumar', //Set Header Title
                    headerStyle: {
                      backgroundColor: COLOR.progressBlue, //Set Header color
                    },
                    headerShown : true,
                  }}
            />
       </Drawer.Navigator>
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
export default NavigationDrawer;
