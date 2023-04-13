import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    img:{
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        width:'100%',
        height:150,
    },
    title:{
        backgroundColor:'#313131',
        height:60,
        paddingVertical:10,
        paddingLeft:10,
        borderBottomEndRadius:15,
        borderBottomStartRadius:15,
    },
    NftCard:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap',
    }
})