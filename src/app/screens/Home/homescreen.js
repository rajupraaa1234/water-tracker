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
          if(targetWater && targetWater != 'undefined'){
             dispatch(setTargetVolume(targetWater));
          }else{
            await setAsValue(`${AppConstant.target}`,"0");
            dispatch(setTargetVolume(0));
          }

          if(bottleWater && bottleWater != 'undefined'){
             dispatch(setBottleVolume(bottleWater));
          }else{
            await setAsValue(`${AppConstant.bottleWater}`,"0");
            dispatch(setBottleVolume(0));
          }

          if(glassWater && glassWater != 'undefined'){
             dispatch(setGlassVolume(glassWater));
          }else{
            await setAsValue(`${AppConstant.glassWater}`,"0");
            dispatch(setGlassVolume(0));
          }

          if(ConsumeWater && ConsumeWater != 'undefined'){
            dispatch(setConsumedWaster(ConsumeWater));
          }else{
            dispatch(setConsumedWaster(0));
            await setAsValue(`${AppConstant.something}`,"0");
          }
        } catch (e) {
          console.log(e);
        }
    }

    useEffect(()=>{
        checkForFirstTimeUser();
        FetchLanguage();    
    },[])

    const onBottleClick = async () => {
        const currConsumeWater = waterStore.consumedWater;
        const targetWater = waterStore.targetVolume;
        const val = waterStore.bottleVolume;
        if(!val || parseInt(val) === 0 ){
          showToastMessage("please add the first bottle water than use it");
          return;
        }
        if(targetWater && targetWater != 0){
              const newConsume = parseInt(`${currConsumeWater}`) + parseInt(`${val}`);
              if(parseInt(`${targetWater}`) >= parseInt(`${newConsume}`)){
                  await setAsValue(`${AppConstant.something}`,`${newConsume}`);
                  dispatch(setConsumedWaster(newConsume));
              }else{
                showToastMessage("you can't take this much water now . This is exceeding from target water ");
              }
        }else{
            showToastMessage("Please add the target water than consume");
        }
    }

    const onCupClick = async () =>{
        const currConsumeWater = waterStore.consumedWater;
        const targetWater = waterStore.targetVolume;
        const val = waterStore.glassVolume;
        if(!val || parseInt(val) === 0 ){
          showToastMessage("please add the first cup water than use it");
          return;
        }
        if(targetWater && targetWater != 0){
              const newConsume = parseInt(`${currConsumeWater}`) + parseInt(`${val}`);
              if(parseInt(`${targetWater}`) >= parseInt(`${newConsume}`)){
                  await setAsValue(`${AppConstant.something}`,`${newConsume}`);
                  dispatch(setConsumedWaster(newConsume));
              }else{
                showToastMessage("you can't take this much water now . This is exceeding from target water ");
              }
        }else{
            showToastMessage("Please add the target water than consume");
        }
    }

    const onClickSomethingelse = () => {
       disableModal(true);
    }

    const getPercentage =  () => {
         const target = parseInt(waterStore.targetVolume);
         const consume = parseInt(waterStore.consumedWater);
         if(target > 0 && consume>0)
            return parseInt((consume * 100)/target);
         return 0;   
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
                    <Text style ={{color:'blue',fontSize:20,fontWeight:'700',alignItems:'center'}}>{waterStore.consumedWater} ml</Text>
                    <Text style ={{color:'blue',fontSize:20,fontWeight:'700',alignItems:'center'}}>{getPercentage()} %</Text>
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
                <TouchableOpacity style={[styles.bottleBtn , {alignSelf:'center',marginLeft : 20,marginTop:50,width:150}]} onPress = {onClickSomethingelse}>
                               <Icon name="glass-wine" size={25} color={'white'}/>
                               <Text style={{color : 'white'}}>{languageString.somethingElse}</Text>
                </TouchableOpacity>
                <AddWaterPopup/>

                
        </View>
        </ScrollView>    
     )
}
export default Homescreen;