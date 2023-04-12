import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    pin:{
        width:16,
        height:16,
        borderColor:'#4DFF7E',
        borderRadius:50,
        borderWidth:1,
        marginHorizontal:5
    },
    button:{
        width:78,
        height:78,
        borderRadius:50,
        backgroundColor:'rgba(255, 255, 255, 0.12)',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:10,
        marginVertical:0,

    },
    number:{
        fontSize:37,
        fontWeight:400,
        color:'#fff'
    },
    abc:{
        color:'#fff',
        marginTop:-10,
        fontSize:10
    },
    activePin:{
        width:16,
        height:16,
        borderColor:'#4DFF7E',
        borderRadius:50,
        borderWidth:1,
        marginHorizontal:5,
        backgroundColor:'#4DFF7E'
    }
})