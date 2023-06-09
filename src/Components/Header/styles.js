import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header:{
        justifyContent:'center',
        backgroundColor:'#161616',
        paddingHorizontal:20,
        height:50,
    },
    text:{
        color:'#FFFFFF',
        fontSize:16,
        fontFamily:'Lexend-Regular',
    },
    home_header:{
        flexDirection:"row",
        justifyContent:'space-between',
        paddingHorizontal:20,
        backgroundColor:'#161616',
        height:50,
        alignItems:'flex-end'
    },
    new_header:{
        flexDirection:'row',
        alignItems:'center'
    },
    new_price:{
        color:'#4DFF7E',
        fontFamily:'Lexend-SemiBold',
        fontSize:15,
        lineHeight:18.75
    },
    new_price$:{
        color:'#8A8A8A',
        fontFamily:'Lexend-Regular',
        fontSize:10,
    },
    header1:{
        marginTop:50,
        backgroundColor:'#161616' ,
        justifyContent:'center',
        paddingHorizontal:20,
        paddingTop:10,
        paddingBottom:10,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
    }
})