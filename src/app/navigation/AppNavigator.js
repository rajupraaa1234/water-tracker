import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import homescreen from "../screens/Home/homescreen";
import ReportGraph from "../screens/Report/ReportGraph";
import HomeHeader from "../component/Header/HomeHeader";



const AppNavigator = () =>{
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"homescreen"} screenOptions = {{headerShown:false}}>
                <Stack.Screen name="homescreen" component={homescreen}
                    options={{
                        title: ' Hey , Raju kumar', //Set Header Title
                        headerStyle: {
                          backgroundColor: '#d8d8d8', //Set Header color
                        },
                        headerShown : true,
                        headerLeft: () => <HomeHeader />,
                      }}
                />
                <Stack.Screen name="ReportScreen" component={ReportGraph} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;
