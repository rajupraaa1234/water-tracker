//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

// create a component
const SimpleButton = (props) => {
    
    const {btnText,onClick,backGroundColor,style} = props;

    return (
        <TouchableOpacity style={[{backgroundColor : backGroundColor, borderRadius : 20,height:50,width : '80%',alignSelf :'center',justifyContent:'center'},{...style}]} onPress={onClick}>
            <Text style={{alignSelf : 'center',alignItems:'center',fontSize:25,color : 'white'}}>{btnText}</Text>
        </TouchableOpacity>
    );
};



SimpleButton.propTypes = {
    btnText : PropTypes.string
};
  
  SimpleButton.defaultProps = {
       btnText : 'submit',
       onClick : () => console.log(`raju click`),
  };
export default SimpleButton;
