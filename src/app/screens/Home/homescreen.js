import React , {useEffect , useState} from "react";
import {View,Text , ImageBackground , TouchableOpacity  } from 'react-native';
import styles from './style';
import {languageString} from '@lacalization'
import {getAsValue} from '@util';
import {AppConstant} from '@constant';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import {drop1} from '@image';
import {useSelector , useDispatch} from 'react-redux';
import {setUsername,setUserLang} from '@action';
import {COLOR} from '@constant';
import {ScrollView} from 'react-native-gesture-handler';


const Homescreen = () =>{

    const {today,target} = languageString;
    const [temp,setTemp ] = useState("");
    const [targetVol , setTarget] = useState(200);
    const userStore = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const FetchLanguage = async () => {
         setTemp(languageString.today);
    }



    const checkForFirstTimeUser = async ()  => {
        try {
          const username = await getAsValue(AppConstant.username);
          const langCode = await getAsValue(AppConstant.langcode);
          if (username != 'undefined') {
            dispatch(setUsername(username));
            dispatch(setUserLang(langCode));
          } 
        } catch (e) {
          console.log(e);
        }
    }

    useEffect(()=>{
        checkForFirstTimeUser();
        FetchLanguage();    
    },[])

    const onBottleClick = () => {
        console.log(`user--from home --r---bottle-----> ${JSON.stringify(userStore)}`);
    }

    const onCupClick = () =>{

    }

    const onClickSomethingelse = () => {

    }

     return (
        <ScrollView contentContainerStyle={{flexGrow : 1 , flexDirection:'column'}}> 
        <View style={styles.container}>
            <Text style={styles.dayTextStyle}>{today}</Text>
            <View style={styles.infoStyle}>
                  <Icon1 name="infocirlceo" size={18} color={'blue'}/>
                  <Text style={{color : 'blue' , left : 18,fontSize:20 , justifyContent : 'center'}}>{target} {targetVol}ml</Text>
            </View>
            <View style={styles.dropStyle}>
                <ImageBackground 
                    resizeMode='cover' 
                    style={styles.dropImageStyle}
                    source={drop1}>
                    <Text style ={{color:'blue',fontSize:20,fontWeight:'700',alignItems:'center'}}>2100 ml</Text>
                    <Text style ={{color:'blue',fontSize:20,fontWeight:'700',alignItems:'center'}}>105 %</Text>
                </ImageBackground>
            </View>
            <Text style={{color : 'white',marginTop:50,fontSize:20,fontWeight:'700', alignSelf:'center'}}>+ {languageString.addition}</Text>
                <View style={{ flexDirection : 'row',marginTop : 30 , alignSelf:'center'}}>
                        <TouchableOpacity style={styles.bottleBtn} onPress = {onBottleClick}>
                               <Icon name="bottle-soda-classic" size={25} color={'white'}/>
                               <Text style={{color : 'white'}}>{languageString.bottle}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.bottleBtn , {marginLeft : 20}]} onPress = {onCupClick}>
                               <Icon name="glass-stange" size={25} color={'white'}/>
                               <Text style={{color : 'white'}}>{languageString.cup}</Text>
                        </TouchableOpacity>
                </View>
                <TouchableOpacity style={[styles.bottleBtn , {alignSelf:'center',marginLeft : 20,marginTop:70,width:150}]} onPress = {onCupClick}>
                               <Icon name="glass-wine" size={25} color={'white'}/>
                               <Text style={{color : 'white'}}>{languageString.somethingElse}</Text>
                </TouchableOpacity>
                
        </View>
        </ScrollView>    
     )
}
export default Homescreen;