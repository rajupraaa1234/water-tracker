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
    },
    dropStyle : {
        borderColor : 'blue',
        borderRadius : 130,
        marginTop : 40,
        height : 250,
        width : 250,
        alignItems : 'center',
        alignSelf : 'center',
        borderWidth : 8,
    },
    dropImageStyle : {
        height : '100%',
        width:'100%' ,
        alignItems : 'center',
        alignSelf : 'center',
        justifyContent : 'center'
    },
    bottleBtn : {
        height : 35,
        width : 90 , 
        padding : 8, 
        borderRadius : 40,
        backgroundColor : 'blue',
        justifyContent : 'center',
        flexDirection:'row',
        alignItems : 'center',
    }
    

});