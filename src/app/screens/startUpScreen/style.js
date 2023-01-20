import { StyleSheet } from "react-native";
import { COLOR } from '@constant';

export default StyleSheet.create({
      container : {
        flex : 1,
        flexDirection : 'column',
        justifyContent:'center',
        backgroundColor : COLOR.backGraound, 
      },
      textStyle : {
           color : COLOR.white,
           fontSize : 20,
           fontWeight : 'bold'
      },
      textContainer : {
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : '10%',
      },
      languageListContainer : {
        width : '80%',
        alignSelf : 'center',
        height : 300,
        borderRadius : 10,
        marginTop : 30,
        backgroundColor : COLOR.white,
        padding : 5
      },
      ListItemStyle : {
        height : 60 , justifyContent : 'center',alignItems : 'center' ,marginVertical:10, borderRadius:10,
      },
      input: {
        borderColor: "gray",
        width: "80%",
        borderWidth: 1,
        alignSelf:'center',
        borderRadius: 10,
        backgroundColor : 'white',
        padding: 10,
      },
})