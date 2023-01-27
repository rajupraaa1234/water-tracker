import React , {useEffect , useState} from "react";
import {View,Text , ImageBackground , TouchableOpacity  } from 'react-native';
import styles from './style';
import {languageString} from '@lacalization'
import {getAsValue,showToastMessage,setAsValue} from '@util';
import {AppConstant} from '@constant';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import {drop1} from '@image';
import {useSelector , useDispatch} from 'react-redux';
import {setUsername,setUserLang,setAddWaterModalVis,setTargetVolume , setBottleVolume , setConsumedWaster,setGlassVolume} from '@action';
import {COLOR} from '@constant';
import {ScrollView} from 'react-native-gesture-handler';
import AddWaterPopup from '../../component/modal/AddWaterPopup';


const Homescreen = () =>{

    const {today,target} = languageString;
    const [temp,setTemp ] = useState("");
    const [targetVol , setTarget] = useState(200);
    const userStore = useSelector(state => state.userReducer);
    const waterStore = useSelector(state => state.waterReducer);
    
    const dispatch = useDispatch();
    const FetchLanguage = async () => {
         setTemp(languageString.today);
    }

    const disableModal = (vis) =>{
        dispatch(setAddWaterModalVis(vis));
    }
    
    const checkForFirstTimeUser = async ()  => {
        try {
          const username = await getAsValue(AppConstant.username);
          const langCode = await getAsValue(AppConstant.langcode);
          const targetWater = await getAsValue(AppConstant.target);
          const bottleWater = await getAsValue(AppConstant.bottleWater);
          const glassWater = await getAsValue(AppConstant.glassWater);
          const ConsumeWater = await getAsValue(AppConstant.something);

          if (username != 'undefined') {
            dispatch(setUsername(username));
            dispatch(setUserLang(langCode));
          } 
          if(targetWater != 'undefined'){
             dispatch(setTargetVolume(targetWater));
          }

          if(bottleWater != 'undefined'){
             dispatch(setBottleVolume(bottleWater));
          }
          if(glassWater != 'undefined'){
             dispatch(setGlassVolume(glassWater));
          }

          if(ConsumeWater != 'undefined'){
            dispatch(setConsumedWaster(ConsumeWater));
          }else{
            dispatch(setConsumedWaster(0));
            await setAsValue(AppConstant.something,0);
          }

          console.log(`waterStore ---------> ${JSON.stringify(waterStore.targetVolume)}`);

        } catch (e) {
          console.log(e);
        }
    }

    useEffect(()=>{
        checkForFirstTimeUser();
        FetchLanguage();    
    },[])

    const onBottleClick = () => {
        disableModal(true);
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
                  <Text style={{color : 'blue' , left : 18,fontSize:20 , justifyContent : 'center'}}>{target} {waterStore.targetVolume ? waterStore.targetVolume : 0} ml</Text>
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
                <TouchableOpacity style={[styles.bottleBtn , {alignSelf:'center',marginLeft : 20,marginTop:50,width:150}]} onPress = {onCupClick}>
                               <Icon name="glass-wine" size={25} color={'white'}/>
                               <Text style={{color : 'white'}}>{languageString.somethingElse}</Text>
                </TouchableOpacity>
                <AddWaterPopup/>

                
        </View>
        </ScrollView>    
     )
}
export default Homescreen;