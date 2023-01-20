import 'react-native-gesture-handler';
import React, {useContext, useEffect , useState} from 'react';
import SplashScreen from 'react-native-splash-screen'
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationDrawer } from './src/app/component';
import ReportGraph from './src/app/screens/Report/ReportGraph';
import AppNavigator from './src/app/navigation/AppNavigator';
import { LogBox } from 'react-native';
import LanguageSelectionScreen from './src/app/screens/startUpScreen/LanguageSelectionScreen';
import { AuthContext } from './src/app/component/Context/context';
import {getAsValue} from '@util';
import {AppConstant} from '@constant';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default function App() {
  {SplashScreen.hide()}
    const Stack1 = createNativeStackNavigator();
    const [isLoading , setIsLoading] = useState(true);
    const [userToken , setUserToken] = useState(null);

    const authContext = React.useMemo(() =>({
             signIn : () => {
                setIsLoading(false);
                setUserToken('raju');
             },
             signOut : () =>{
                setIsLoading(false);
                setUserToken(null);
             },
             signUp : ()=>{
                setIsLoading(false);
                setUserToken('raju');
             }
    }));


    const checkForFirstTimeUser = async ()  => {
      try {
        const temp = await getAsValue(AppConstant.username);
        if (temp != 'undefined') {
          setUserToken(temp);
        } else {
          setUserToken(null);
        }
      } catch (e) {
        console.log(e);
      }
    }

    useEffect(() =>{
      checkForFirstTimeUser();
    },[]);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken !== null ? (
          <AppNavigator/>
            
        ) :
            (
                    <Stack1.Navigator initialRouteName={"LanguageSelectionScreen" } screenOptions={{ headerShown: false }}>
                        <Stack1.Screen name="NavigationDrawer" component={NavigationDrawer} options={{ headerShown: false }} />
                        <Stack1.Screen name="ReportScreen" component={ReportGraph} options={{ headerShown: false }} />
                        <Stack1.Screen name="LanguageSelectionScreen" component={LanguageSelectionScreen} options={{ headerShown: false }} />
                    </Stack1.Navigator>
               
            )
        }
         </NavigationContainer>
    </AuthContext.Provider>
);


}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
