//import liraries
import React, { Component , useEffect,useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useSelector , useDispatch} from 'react-redux';
import {languageString} from '@lacalization'

// create a component
const GraphScreen = () => {

    const userStore = useSelector(state => state.userReducer);
    const [temp,setTemp ] = useState("");


    const FetchLanguage = async () => {
        setTemp(languageString.today);
   }

   

    useEffect(()=>{
        FetchLanguage();
    },[])


    return (
        <View style={styles.container}>
            <Text>Graph Component</Text>
        </View>
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
export default GraphScreen;
