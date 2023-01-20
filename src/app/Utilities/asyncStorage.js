import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setAsValue(key,value) {
    try{
        await AsyncStorage.setItem(key,value);
        return true;
    }catch(e){
        console.log(e);
    }
} 

export async function getAsValue(key) {
    try{
         const value = await AsyncStorage.getItem(key);
         return value;
    }catch(e){
        console.log(e);   
    }
}

export async function clearStorage() {
     try{
        await AsyncStorage.clear();
     }catch(e){
        console.log(e);  
     }
}