//import liraries
import React, { Component , useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomNavigator} from '@component';
import {COLOR} from '@constant';
import {useSelector } from 'react-redux';
import DrawerContent from './DrawerContent';
import {getAsValue} from '@util';
import {AppConstant} from '@constant';


// create a component
const NavigationDrawer = ({navigation}) => {
    const Drawer = createDrawerNavigator();
    const [name,setName] = useState("");

    const getUserDetails = async () =>{
        const username = await getAsValue(AppConstant.username);
        setName(username);
    }

    useEffect(()=>{
       getUserDetails();
    },[]);
    const userStore = useSelector(state => state.userReducer);
  
    return (

        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props}  />}>
            <Drawer.Screen
                name="Homescreen"
                component={BottomNavigator}
                drawerContentOptions={{
                    activeTintColor: COLOR.progressBlue,
                    itemStyle: {marginVertical: 5},
                }}
                //drawerContent={<HomeHeader/>} 
                options={{
                    title: `Hey, ${name}` , //Set Header Title
                    headerStyle: {
                      backgroundColor: 'rgba(34,36,40,1)', //Set Header color
                    },
                    headerTintColor : COLOR.white,
                    headerShown : true,
                    drawerStyle: {
                        backgroundColor: 'white',
                        width: '60%',
                    },
                    drawerType : 'back',
                    overlayColor: 'transparent',
                    itemStyle : {
                        backgroundColor : 'slide'
                    },
                    
                      tabBarVisable: false,
                      tabBarLabelStyle : {
                        paddingBottom : 0
                      }
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
