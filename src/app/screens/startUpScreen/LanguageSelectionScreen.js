//import liraries
import React, { Component , useState  } from 'react';
import { View, Text, StyleSheet, FlatList , TouchableOpacity,SafeAreaView , TextInput} from 'react-native';
import style from './style';
import { SimpleButton } from '@component';
import {setAsValue} from '@util';
import Toast from 'react-native-toast-message';
import { AuthContext } from '../../component/Context/context';
import {AppConstant} from '@constant';
import languageString from '../../localization/languageString';

const LanguageSelectionScreen = ({navigation}) => {

    const language =
        [
            {code : "eng" , lang : 'English' , desc : 'All the context will be in english language '},
            {code : "hi" , lang : 'हिंदी' , desc : 'सभी संदर्भ हिंदी भाषा में होंगे'},
            {code : "pun" , lang : 'ਪੰਜਾਬੀ' , desc : 'ਸਾਰਾ ਪ੍ਰਸੰਗ ਹਿੰਦੀ ਭਾਸ਼ਾ ਵਿੱਚ ਹੋਵੇਗਾ'},
            {code : "ur" , lang : 'اردو' , desc : 'تمام سیاق و سباق ہندی زبان میں ہوں گے۔'},
            {code : "ka" , lang : 'ಕೆನಡಾ' , desc : 'ಎಲ್ಲಾ ಸಂದರ್ಭವೂ ಹಿಂದಿ ಭಾಷೆಯಲ್ಲಿ ಇರುತ್ತದೆ'},
        ];
    const [currIdx , setCurrIdx ] = useState(-1);
    const [name, setName] = useState("");
    const [langCode , setLangCode ] = useState("");
    const { signIn } = React.useContext(AuthContext);

    const onLangSelect = (index,item) => {
        setCurrIdx(index);
        setLangCode(item.code);
    }

    const renderItem = ({ item,index }) => {
        return (
            <TouchableOpacity onPress={()=> onLangSelect(index,item)} style={[style.ListItemStyle,{backgroundColor : index == currIdx ?  '#00ffff' : '#f0f8ff'}]}>
                <Text style={{color:'black',fontSize:20}}>{item.lang}</Text>
                <View style={{marginTop :5,marginHorizontal : 10,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{alignItems:'center',fontSize:15,alignSelf:'center'}}>
                         {item.desc} 
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    const onClick = async () =>{
        if(name === "" || (name != null && name.length <3)){
            Toast.show({
                type: 'error',
                text1: 'Alert',
                text2: 'Please enter your name first',
              });
        }else if(langCode === ""){
            Toast.show({
                type: 'error',
                text1: 'Alert',
                text2: 'Please select your prefer language',
              });
        }
        else{ 
            await setAsValue(AppConstant.username, name);
            await setAsValue(AppConstant.langcode, langCode);
            languageString.setLanguage(langCode);
            navigation.replace('NavigationDrawer');
        }
    }

    return (
        <View style={style.container}>
            <Toast/>
            <View style={style.textContainer}>
                <Text style={style.textStyle}>Select you Language</Text>
            </View>
            <View style = {style.languageListContainer}>
               <SafeAreaView style={{flex: 1}}>
                <FlatList
                    data={language}
                    keyExtractor = {(item,index)=> `${index}`}
                    showsVerticalScrollIndicator = {false}
                    renderItem = {(item,index) => renderItem(item,index)}
                />
                </SafeAreaView>
            </View>
            <View style={{marginTop:30}}>
               <TextInput style={style.input} placeholder="please enter your good name..." onChangeText={(value) => setName(value)} />
            </View>
            <SimpleButton
                btnText = {"Next"}
                onClick = {onClick}
                backGroundColor = {'blue'}
                style = {{marginTop : 40, bottom : 0}}
            />
        </View>
    );
};

export default LanguageSelectionScreen;
