import {View,Dimensions} from 'react-native'
import SwiperFlatList from 'react-native-swiper-flatlist'
import { Main } from '../../Components/Main'
import { Gstyles } from '../../Gstyle'
import { MoreWallet } from '../MoreWallet'

export const MainPage = () =>{
    const { width } = Dimensions.get('window');
    const data = [{},{},{}]
    return <View style = {Gstyles.home}>
        <View  style = {Gstyles.container}>
            <SwiperFlatList
                showPagination
                paginationStyle = {{position:'absolute',top:-30}}
                paginationDefaultColor ='#8A8A8A'
                paginationActiveColor = '#4DFF7E'
                paginationStyleItem ={{width:10,height:10,marginHorizontal:3}}
                // data={data}
            >
                {data.map((elm,i)=>(
                    <View key={i} style = {{width:width-45,marginRight:5}}>
                        {i!==data.length-1 ?
                            <Main data={data} price={'1 000.023'} price_$ ={'2.200'} token = 'EQAQxrU1G0D9-FQ3h1mO7o5qex-JJWvrAE82QnezDHqrS16B' />
                            :
                            <MoreWallet />
                        }
                    </View>
                ))}
            </SwiperFlatList>
        </View>
         
    </View>
}