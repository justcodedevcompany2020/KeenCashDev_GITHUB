import { View,Dimensions } from "react-native"
import SwiperFlatList from "react-native-swiper-flatlist"
import { Gstyles } from "../../Gstyle"
import { NftList } from "../../Components/NftList"
import { NFtListMain } from "../../Components/NftList/NftListMain"

export const NftListPage = ({navigation}) =>{
    const { width } = Dimensions.get('window');
    return <View style = {Gstyles.home}>
         <View  style = {Gstyles.container}>
            <SwiperFlatList 
                showPagination
                paginationStyle = {{position:'absolute',top:-30}}
                paginationDefaultColor ='#8A8A8A'
                paginationActiveColor = '#4DFF7E'
                paginationStyleItem ={{width:10,height:10,marginHorizontal:3}}
            >
                <View style = {{width:width-45,marginRight:5}}>
                    <NFtListMain navigation= {navigation}/>
                </View>
                <View style = {{width:width-45,marginRight:5}}>
                    <NFtListMain navigation= {navigation}/>
                </View>
            </SwiperFlatList>
         </View>

    </View>
}