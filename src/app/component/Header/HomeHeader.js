import React  from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const HomeHeader = () =>{
   return (
    <TouchableOpacity onPress={()=>{console.log(`click...`)}}>
            <Icon name="menu" size={30} color="#900" />
    </TouchableOpacity>
   )
}

export default HomeHeader;