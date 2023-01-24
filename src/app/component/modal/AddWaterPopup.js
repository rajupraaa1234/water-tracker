import React , {useState} from 'react';
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
  TextInput
} from 'react-native';

import {useSelector , useDispatch} from 'react-redux';
import {setAddWaterModalVis} from '@action';
import { SelectList } from 'react-native-dropdown-select-list'
import { SimpleButton } from '@component';


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
  const [valume,setVolume] = useState(0);
 
  const dispatch = useDispatch();

  const disableModal = (vis) =>{
    dispatch(setAddWaterModalVis(vis));
  }

  const data = [
      {key:'1', value:'Target Water Volume'},
      {key:'2', value:'One Cup Water Volume'},
      {key:'3', value:'One Bottle Water Volue'},
      {key:'4', value:'Something else Water Volume'},
  ]

  const onClick = () =>{
    if(!selected){
        console.log(`1-`);
    }else if(!valume){
        console.log(`2-`);
    }else{
        console.log(`3-`);
    }
   
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ModalPoup visible={addWaterPopupRed.isAddWaterModalVisible}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => disableModal(false)}>
                <Text style={{fontSize:25}}>{'X'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
            <SelectList 
                setSelected={(val) => setSelected(val)} 
                data={data} 
                save='value'
                placeholder='Select Water Volume Type'
                style={{borderColor:'red'}}
            />
        </View>
        <View style ={{marginTop:10}}> 
            <TextInput style={styles.input} keyboardType = "numeric" placeholder="Enter water volume in ml " onChangeText={(value) => setVolume(value)} />
        </View> 
        <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}>
          Congratulations registration was successful
        </Text>

        <SimpleButton
                btnText = {"Submit"}
                onClick = {onClick}
                backGroundColor = {'blue'}
                style = {{marginTop : 10, bottom : 0}}
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
    height: 30,
    alignItems: 'flex-end',
    justifyContent: 'center',
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