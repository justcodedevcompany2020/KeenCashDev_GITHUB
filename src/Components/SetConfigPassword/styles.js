import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    password_continer:{
        flexDirection:'row',
        justifyContent:'center',
    },
    input:{
        borderWidth:1,
        borderColor:'#4DFF7E',
        borderRadius:1000,
        width:22,
        height:19,
        marginHorizontal:10,
    },
    opt:{
        width:250,
        height:88,
        borderRadius:13,
        justifyContent:'center',
        backgroundColor:'rgba(255, 255, 255, 0.55)'
    },
    touchableOpacity:{
        height:44,
        justifyContent:'center',
    },
    text:{
        fontSize:15,
        fontWeight:300,
        color:'#000',
        marginHorizontal:10,
    }
})