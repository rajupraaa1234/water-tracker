import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import homescreen from "../screens/Home/homescreen";
import ReportGraph from "../screens/Report/ReportGraph";
// import HomeHeader from "../component/Header/HomeHeader";
import { NavigationDrawer } from "../component";



const AppNavigator = () =>{
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"NavigationDrawer"} screenOptions = {{headerShown:false}}>
               <Stack.Screen name="NavigationDrawer" component={NavigationDrawer} options={{headerShown:false}}/>
                <Stack.Screen name="ReportScreen" component={ReportGraph} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;
