import { View ,Text, Image,ScrollView} from "react-native"
import { useSelector } from "react-redux"
import ViewMoreText from 'react-native-view-more-text';
import {styles} from './styles'
import img from '../../img/nft.png'
import { Gstyles } from "../../Gstyle"
import { BlueButton } from "../../Components/Button.js/BlueButton";

export const NftInfo = () => {
    const {header} = useSelector((st)=>st)
    const renderViewMore = (onPress) =>{
        return(
          <Text style = {{color:'#4DFF7E',fontSize:15,fontFamily:'Lexend-Light'}} onPress={onPress}>More</Text>
        )
      }
     const renderViewLess = (onPress) =>{
        return(
          <Text style = {{color:'#4DFF7E',fontSize:15,fontFamily:'Lexend-Light'}} onPress={onPress}>Less</Text>
        )
      }
    return <ScrollView style = {Gstyles.home}>
        <View style = {{marginBottom:50}}>
            <Image style = {styles.img} source={img} />
            <Text style = {styles.title}>{header.title}</Text>
            <Text style = {styles.text}>{header.text}</Text>
            <ViewMoreText
                numberOfLines={3}
                renderViewMore={renderViewMore}
                renderViewLess={renderViewLess}
                >
                <Text style = {{color:'#8A8A8A',fontFamily:'Lexend-Light'}}>Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.</Text>
            </ViewMoreText>
            <View style = {{marginVertical:20}}>
                <BlueButton backgroundColor="#4DFF7E" color ='#161616' text ='Transfer' height={50}/>
            </View>
            <Text style = {styles.title}>Collection</Text>
            <ViewMoreText
                numberOfLines={3}
                renderViewMore={renderViewMore}
                renderViewLess={renderViewLess}
                >
                <Text style = {{color:'#8A8A8A',fontFamily:'Lexend-Light'}}>Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.</Text>
            </ViewMoreText>
            <Text style = {styles.title}>Properties</Text>
            <View style = {{flexDirection:'row'}}>
                <View  style = {{marginRight:80}}>
                    <View style ={{marginVertical:10}}>
                        <Text style = {styles.name}>Background</Text>
                        <Text style = {styles.name2}>Ocean</Text>
                    </View>
                    <View style ={{marginVertical:10}}>
                        <Text style = {styles.name}>Face</Text>
                        <Text style = {styles.name2}>Scar</Text>
                    </View>
                    <View style ={{marginVertical:10}}>
                        <Text style = {styles.name}>Skin</Text>
                        <Text style = {styles.name2}>Orange</Text>
                    </View>
                </View>
                <View>
                    <View style ={{marginVertical:10}}>
                        <Text style = {styles.name}>Body</Text>
                        <Text style = {styles.name2}>Scarf red</Text>
                    </View>
                    <View style ={{marginVertical:10}}>
                        <Text style = {styles.name}>Head</Text>
                        <Text style = {styles.name2}>Saint</Text>
                    </View>
                    <View style ={{marginVertical:10}}>
                        <Text style = {styles.name}>Generation</Text>
                        <Text style = {styles.name2}>5</Text>
                    </View>
                </View>
            </View>
            <Text style = {{textAlign:'center',fontFamily:'Lexend-SemiBold',fontSize:15,color:'#EAEAEA',marginVertical:30}}>View in Tonscan {`>`} </Text>
        </View>
    </ScrollView>
}