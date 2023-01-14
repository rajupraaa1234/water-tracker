import React from "react";
import {View,Text} from 'react-native';
import styles from './style';


const Homescreen = () =>{
     return (
        <View style={styles.container}>
            
            <Text style={styles.dayTextStyle}>Today</Text>
        </View>
     )
}
export default Homescreen;