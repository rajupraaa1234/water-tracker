import React , {useState , useEffect} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Text,
  TouchableOpacity,
  Animated,
  TextInput
} from 'react-native';

import {useSelector , useDispatch} from 'react-redux';
import {setAddWaterModalVis , setTargetVolume,setBottleVolume,setGlassVolume , setConsumedWaster} from '@action';
import { SelectList } from 'react-native-dropdown-select-list'
import { SimpleButton } from '@component';
import {showToastMessage,getAsValue,setAsValue} from '@util';
import {AppConstant} from '@constant';


const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const AddWaterPopup = () => {
  const addWaterPopupRed = useSelector(state => state.addWaterModal);
  const [selected, setSelected] = useState("");
  const [volText, setVolText] = useState("Please enter your container or target volume");
  const [valume,setVolume] = useState(0);
  const waterStore = useSelector(state => state.waterReducer);

  const[isTargetDis , setTargetDiable] = useState(false);
  const[isGlassDis , setGlassDiable] = useState(false);
  const[isBottleDis , setBottleDiable] = useState(false);
  const[isSomethingDis , setSomethingDiable] = useState(false);


  useEffect(()=>{
      console.log(`raju kumarer`);
      checkforDisableList();
  },[addWaterPopupRed.isAddWaterModalVisible]);


  const dispatch = useDispatch();

  const checkforDisableList = () =>{
        if(waterStore.targetVolume && waterStore.targetVolume != 0){
            setTargetDiable(true);
        }if(waterStore.bottleVolume && waterStore.bottleVolume != 0){
           setBottleDiable(true);
        }if(waterStore.glassVolume && waterStore.glassVolume != 0){
          setGlassDiable(true);
        }
  }

  const resetState = () =>{
    setSelected("");
    setVolText("Please enter your container or target volume");
    setVolume(0);
    setTargetDiable(false);
    setGlassDiable(false);
    setBottleDiable(false);
    setSomethingDiable(false);
  }

  const disableModal = (vis) =>{
    resetState();
    dispatch(setAddWaterModalVis(vis));
  }

  const data = [
      {key:'1', value:'Target Water Volume' , desc : 'This will add in your target water volume',disabled: isTargetDis},
      {key:'2', value:'One Cup Water Volume',desc : 'This will set your one cup volume for future use',disabled: isGlassDis},
      {key:'3', value:'One Bottle Water Volue',desc : 'This will set your one bottle volume for future use ',disabled: isBottleDis},
      {key:'4', value:'Something else Water Volume', desc : 'This will set your own volume for future use ',disabled: isSomethingDis},
  ]

  const saveDataInLocal = async () => {
      var type = "";
       if(selected === '1'){
          type = AppConstant.target;
          dispatch(setTargetVolume(valume));
       }else if(selected === '2'){
          type = AppConstant.glassWater;
          dispatch(setGlassVolume(valume));
       }else if(selected === '3'){
          dispatch(setBottleVolume(valume));
          type = AppConstant.bottleWater;
       }else{
          type = AppConstant.something;
          addConsumeWater(valume);
       }
        await setAsValue(type,valume);
        disableModal(false);
  }
  const onClick = () =>{
    console.log(`waterStore ----------> ${JSON.stringify(waterStore)}`);
    if(!selected){
      showToastMessage("Please select water volume type"); 
    }else if(!valume){
      showToastMessage("please enter your water capacity"); 
    }else{
       saveDataInLocal();
    }
  }

  const onDropDownSelection = (val) =>{
     setSelected(val)
     if(val === '1'){
         setVolText(data[0].desc);
     }else if(val === '2'){
         setVolText(data[1].desc);
     }else if(val === '3'){
        setVolText(data[2].desc);
     }else{
        setVolText(data[3].desc);
     }
  }

  const addConsumeWater = async (val) =>{
      const currConsumeWater = waterStore.consumedWater;
      //const currCosumeWaterLocal = getAsValue(AppConstant.something);
      const targetWater = waterStore.targetVolume;
      console.log(`val --------> ${val}`)
      if(targetWater && targetWater != 0){
            console.log(`currConsumeWater --------> ${currConsumeWater}`);
            const newConsume = parseInt(`${currConsumeWater}`) + parseInt(`${val}`);
            console.log(`new Consume ---------> ${newConsume}`);
            if(parseInt(`${targetWater}`) < parseInt(`${newConsume}`)){
               await setAsValue(AppConstant.something,newConsume);
                dispatch(setConsumedWaster(newConsume));
            }else{
              showToastMessage("you can't take this much water now . This is exceeding from target water ");
            }
      }else{
          showToastMessage("Please add the target water than consume");
      }
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ModalPoup visible={addWaterPopupRed.isAddWaterModalVisible}>
        <View style={{flexDirection : 'row' , alignItems:'center',justifyContent : 'space-between'}}>
        <Text style={{fontSize:20 , fontWeight:'500'}}>Add Water</Text>
          <View style={{alignItems: 'center'}}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => disableModal(false)}>
                  <Text style={{fontSize:25}}>{'X'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center' , marginTop : 10}}>
            <SelectList 
                setSelected={(val) => onDropDownSelection(val)} 
                data={data} 
                save='key'
                placeholder='Select Water Volume Type'
                style={{borderColor:'red'}}
            />
        </View>
        <View style ={{marginTop:10}}> 
            <TextInput style={styles.input} keyboardType = "numeric" placeholder="Enter water volume in ml " onChangeText={(value) => setVolume(value)} />
        </View> 
        <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}>
          {volText}
        </Text>

        <SimpleButton
                btnText = {"Submit"}
                onClick = {onClick}
                backGroundColor = {'blue'}
                style = {{ bottom : 10}}
        />
      </ModalPoup>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: '100%',
  },
  input: {
    borderColor: "gray",
    width: "80%",
    borderWidth: 1,
    alignSelf:'center',
    marginHorizontal:20,
    borderRadius: 10,
    backgroundColor : 'white',
    padding: 10,
  },
});

export default AddWaterPopup;