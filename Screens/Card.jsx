import {Text, View,Pressable,Image,ScrollView} from 'react-native'
import React, { useState,useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { useNavigation } from '@react-navigation/native';

const Card = (props) => {
    const cartState = useContext(CartContext)
    const data = props.route.params.item.item
    const [wish,setWish] = useState(false)
    const [det,setDet] = useState(false)
    const [ct,setCt] = useState(false)
    const navigation = useNavigation()

    const handleCart = ()=>{
        if(!ct){
            cartState.setCart([...cartState.cart,{title: data.title,price: data.price,image: data.image,id: data.id}])
        }else{
            navigation.navigate('Cart',{screen: 'Main'})
        }
        setCt(true)        
    }

  return (
    <View style={{marginTop:50}}>
      <ScrollView>
      <View style={{margin:15,marginRight:20,alignItems:'flex-end'}}>
        <View>
        <Pressable onPress={()=>setWish(!wish)}>
            { (wish)?<Image style={{width:30,height:30}} source={require('../assets/heart-51.png')}/>:<Image style={{width:30,height:30}} source={require('../assets/heart-50.png')}/>
            }
        </Pressable>
        </View>
      </View>
      <View style={{alignItems:'center'}}>
      <Image
        width={350}
        height={450}
        resizeMode={"cover"}
        source={{
           uri: data.image,
        }}
        alt="Alternate Text"
        style={{borderRadius:10,borderWidth:1,borderColor:'black'}}
        />
      </View >
      <View style={{alignItems:'flex-end',margin:15,position:'absolute',top:456,left:250}}>
      <Pressable onPress={()=>setDet(!det)}>
      {(det)?<View style={{backgroundColor:'white',width:100,height:35,borderRadius:60,alignItems:'center',justifyContent:'center',shadowOffset:20}}>
        <Text style={{color:'#0b28e3',fontWeight:'bold',fontSize:20}}>Details</Text>
      </View> : <View style={{backgroundColor:'#0b28e3',width:100,height:35,borderRadius:60,alignItems:'center',justifyContent:'center',shadowOffset:20}}>
        <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Details</Text>
      </View>}
      </Pressable>
      </View>
      <View style={{marginHorizontal:25,marginVertical:10}}>
        <Text style={{fontSize:30,fontWeight:'800'}}>{data.title}</Text>
      </View>
      <View style={{marginLeft:25}}>
        <Text style={{fontSize:20,fontWeight:'600'}}>Rating: {data.rating.rate} / 5.0</Text>
      </View>
      <View style={{marginHorizontal:25,marginVertical:10}}>
        <Text style={{fontSize:25,fontWeight:'800'}}>Price : <Text style={{color:'green'}}>₹ {data.price}</Text></Text>
      </View>
      {(det)?<View style={{marginHorizontal:25,marginBottom:50}}>
        <Text style={{fontSize:15}}>
            {data.description}
        </Text>
      </View>:null}
      </ScrollView>
      <View style={{flexDirection:'row',position:'absolute',top:705}}>
        <View style={{width:'50%',alignItems:'center',justifyContent:'center',height:50,borderColor:'#4F200D',borderWidth:1,backgroundColor:'white'}}><Text style={{fontSize:15,fontWeight:'bold'}}>Buy Now</Text></View>
        <View style={{width:'50%',alignItems:'center',justifyContent:'center',height:50,borderColor:'#4F200D',borderWidth:1,backgroundColor:'#FFD93D'}}><Pressable onPress={handleCart}>{(ct)?<Text style={{fontSize:15,fontWeight:'bold'}}>Go to Cart</Text>:<Text style={{fontSize:15,fontWeight:'bold'}}>Add to Cart</Text>}</Pressable></View>
      </View>
    </View>
  )
}

export default Card
