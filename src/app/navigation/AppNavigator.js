import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationDrawer } from "../component";
import ReportGraph from "../screens/Report/ReportGraph";
import LanguageSelectionScreen from "../screens/startUpScreen/LanguageSelectionScreen";

const AppNavigator = () =>{
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName={"NavigationDrawer"} screenOptions={{ headerShown: false }}>
            <Stack.Screen name="NavigationDrawer" component={NavigationDrawer} options={{ headerShown: false }} />
            <Stack.Screen name="ReportScreen" component={ReportGraph} options={{ headerShown: false }} />
            <Stack.Screen name="LanguageSelectionScreen" component={LanguageSelectionScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default AppNavigator;
