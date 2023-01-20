import { StyleSheet } from "react-native";
import { COLOR } from "../../constant/COLOR";

export default StyleSheet.create({
   
    container : {
        flex  : 1,
        flexDirection : 'column',
        backgroundColor : COLOR.backGraound,
    },
    dayTextStyle : {
        color : COLOR.white,
        alignSelf : 'center',
        marginTop : '10%',
        fontSize : 20,
    },
    infoStyle : {
        alignSelf : 'center',
        marginTop : 12,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
    }
    

});