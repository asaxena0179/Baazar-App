import { StyleSheet, Text, View ,FlatList,ScrollView ,Pressable,Image} from 'react-native'
import {React ,useState,useContext,useEffect} from 'react'
import { CartContext } from '../Context/CartContext'

const AllPro = (props) => {
  const dataArray = props.route.params.arr.dataArray;
  const [id,setId] = useState(0)
  const cartState = useContext(CartContext)
  useEffect(()=>{
    const handleCart = ()=>{
      console.log(id)
      if(id !== 0){
        cartState.setCart([...cartState.cart,{title: dataArray[id-1].title,price: dataArray[id-1].price,image: dataArray[id-1].image,id: dataArray[id-1].id}])
      }
    }
    handleCart()
  },[id])
  return (
    <View style={{marginTop:50,marginHorizontal:10,flex:1}}>
      <View style={{flex:1}}>
      <View style={{borderBottomWidth:3,borderBottomColor:'#0b28e3',padding:10}}>
        <Text style={{fontWeight:'600',fontSize:30}}>All Products</Text>
      </View>
      <ScrollView>
      {dataArray.map((data,i)=>{
        return(
          <View style={{flexDirection:'row',justifyContent:'space-between',margin:10,position:'relative'}}>
            <View>
            <Image
            width={150}
            height={150}
            resizeMode={"cover"}
            source={{
               uri: data.image,
            }}
            alt="Alternate Text"
            style={{borderRadius:10,borderWidth:1,borderColor:'black'}}
            />
            </View>
            <View style={{width:"50%"}}>
              <View>
              <Text style={{fontSize:20,marginVertical:3}} numberOfLines={2}>{data.title}</Text>
              <Text style={{fontSize:20,marginVertical:10,fontWeight:'600'}}>₹{data.price}</Text>
              <View style={{flexDirection:'row'}}>
                <View style={{width:'50%',alignItems:'center',justifyContent:'center',height:30,borderColor:'#4F200D',borderWidth:1,backgroundColor:'#FFD93D'}}><Pressable onPress={()=> setId(data.id)}><Text style={{fontSize:15,fontWeight:'bold'}}>Add to Cart</Text></Pressable></View>
                <View style={{width:'50%',alignItems:'center',justifyContent:'center',height:30,borderColor:'#4F200D',borderWidth:1,backgroundColor:'white'}}><Text>Buy Now</Text></View>
              </View>
              </View>
            </View>
            </View>
        )
      })}
      </ScrollView>
      </View>
    </View>
  )
}

export default AllPro

const styles = StyleSheet.create({})