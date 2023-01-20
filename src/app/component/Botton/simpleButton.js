//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

// create a component
const SimpleButton = (props) => {
    
    const {btnText,onClick,backGroundColor,style} = props;

    return (
        <TouchableOpacity style={[{backgroundColor : backGroundColor, borderRadius : 20,height:50,width : '80%',alignSelf :'center',justifyContent:'center'},{...style}]} onPress={onClick}>
            <Text style={{alignSelf : 'center',alignItems:'center',fontSize:25,color : 'white'}}>{btnText}</Text>
        </TouchableOpacity>
    );
};

// const styles = StyleSheet.create({
//     container  : {
//        backgroundColor : backGroundColor
//     }
// })

//make this component available to the app
export default SimpleButton;
