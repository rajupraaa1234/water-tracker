import React , {useEffect , useState} from "react";
import {View,Text} from 'react-native';
import styles from './style';
import {languageString} from '@lacalization'
import {getAsValue} from '@util';
import {AppConstant} from '@constant';
import Icon from 'react-native-vector-icons/AntDesign';




const Homescreen = () =>{

    const {today,target} = languageString;
    const [temp,setTemp ] = useState("");
    const [targetVol , setTarget] = useState(200);
    const FetchLanguage = async () => {
         setTemp(languageString.today);
    }

    useEffect(()=>{
        FetchLanguage();    
    },[])


     return (
        <View style={styles.container}>
            <Text style={styles.dayTextStyle}>{today}</Text>
            <View style={styles.infoStyle}>
                  <Icon name="infocirlceo" size={18} color={'blue'}/>
                  <Text style={{color : 'blue' , left : 18,fontSize:20 , justifyContent : 'center'}}>{target} {targetVol}ml</Text>
            </View>


        </View>
     )
}
export default Homescreen;