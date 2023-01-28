//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , TouchableOpacity ,ImageBackground ,Image} from 'react-native';
import {COLOR} from '@constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {userImg,menuBg} from '@image';
import {useSelector , useDispatch} from 'react-redux';
import {setAddWaterModalVis} from '@action';
import {clearStorage} from '@util';
import {userReset,resetWater} from '@action';

import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
    
  } from '@react-navigation/drawer';

// create a component
const DrawerContent = (props , {navigation}) => {


  const dispatch = useDispatch();


  const disableModal = (vis) =>{
      dispatch(setAddWaterModalVis(vis));
      props.navigation.closeDrawer();
  }

  const onClick = (id) =>{
    switch(id){
      case 2 : {
        disableModal(true);
        break;
      }    
    }
    props.navigation.closeDrawer(); 
  }

  const onLogout = async () =>{
       await clearStorage();
       dispatch(userReset());
       dispatch(resetWater());
       props.navigation.replace('LanguageSelectionScreen');
  }
    const userStore = useSelector(state => state.userReducer);
    return (
        <View style={{flex: 1}}>
          <DrawerContentScrollView
            {...props}
            contentContainerStyle={{backgroundColor: '#8200d6'}}>
            <ImageBackground
              source={menuBg}
              style={{padding: 20}}>
              <Image
                source={userImg}
                style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
              />
              <Text
                style={{
                  color: '#fff',
                  fontSize: 18,
                  fontFamily: 'Roboto-Medium',
                  marginBottom: 5,
                }}>
                {userStore.username}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: '#fff',
                    fontFamily: 'Roboto-Regular',
                    marginRight: 5,
                  }}>
                  280 Coins
                </Text>
                <FontAwesome5 name="coins" size={14} color="#fff" />
              </View>
            </ImageBackground>
            <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
              <DrawerItemList {...props} />
                <DrawerItem 
                     label={"Uilization Graph"}
                     labelStyle={{color : COLOR.darkButtonBlueColor}}
                     onPress={()=> {onClick(1)}}
                />
                <DrawerItem 
                     label={"Add your target water"}
                     labelStyle={{color : COLOR.darkButtonBlueColor}}
                     onPress={()=>{onClick(2)}}
                />
                <DrawerItem 
                     label={"Change your Language"}
                     labelStyle={{color : COLOR.darkButtonBlueColor}}
                     onPress={()=>{onClick(3)}}
                />
                <DrawerItem 
                     label={"Profile"}
                     labelStyle={{color : COLOR.darkButtonBlueColor}}
                     onPress={()=>{onClick(4)}}
                />

            </View>
          </DrawerContentScrollView>
          <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
            <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name="share-social-outline" size={22} color={COLOR.darkButtonBlueColor} />
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: 'Roboto-Medium',
                    marginLeft: 5,
                    color : COLOR.darkButtonBlueColor
                  }}>
                  Tell a Friend
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {onLogout()}} style={{paddingVertical: 15}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name="exit-outline" size={22} color={COLOR.darkButtonBlueColor}/>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: 'Roboto-Medium',
                    marginLeft: 5,
                    color : COLOR.darkButtonBlueColor
                  }}>
                  Sign Out
                </Text>
              </View>
            </TouchableOpacity>
          </View>
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
export default DrawerContent;
