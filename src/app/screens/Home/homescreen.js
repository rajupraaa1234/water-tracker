import React , {useEffect , useState} from "react";
import {View,Text} from 'react-native';
import styles from './style';
import {languageString} from '@lacalization'
import {getAsValue} from '@util';
import {AppConstant} from '@constant';




const Homescreen = () =>{

    const {today,random} = languageString;
    const [temp,setTemp ] = useState("");
    const FetchLanguage = async () => {
         setTemp(languageString.today);
    }

    useEffect(()=>{
        FetchLanguage();    
    },[])


     return (
        <View style={styles.container}>
            <Text style={styles.dayTextStyle}>{today}</Text>
            <Text style={styles.dayTextStyle}>{random}</Text>
        </View>
     )
}
export default Homescreen;