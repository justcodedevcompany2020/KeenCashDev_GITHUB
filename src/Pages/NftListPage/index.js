import { View,Dimensions } from "react-native"
import SwiperFlatList from "react-native-swiper-flatlist"
import { Gstyles } from "../../Gstyle"
import { NftList } from "../../Components/NftList"

export const NftListPage = ({navigation}) =>{
    const { width } = Dimensions.get('window');
    return <View style = {Gstyles.home}>
         <View  style = {Gstyles.container}>
            <SwiperFlatList >
                <View style = {{width:width-45,marginRight:5}}>
                    <NftList navigation= {navigation}/>
                </View>
            </SwiperFlatList>
         </View>

    </View>
}