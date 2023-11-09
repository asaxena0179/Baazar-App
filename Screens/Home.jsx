import { StyleSheet, Text, View,Pressable,TextInput,ScrollView,TouchableOpacity,Image,FlatList, Animated} from 'react-native'
import axios from 'axios';
import {React ,useEffect,useState ,useRef} from 'react'
import { useNavigation } from '@react-navigation/native';

const Home = () => {
const navigation = useNavigation()
const [dataArray, setDataArray] = useState([]);
const [dataJ, setDataJ] = useState([]);
const [dataE, setDataE] = useState([]);
  useEffect(() => {
    console.log("rjhgbrdjhgbdjhgb")
    axios.get('https://fakestoreapi.com/products/')
      .then(response => {
        
        const data = response.data;
        const dataArray = Array.isArray(data) ? data : [];
        // console.warn(dataArray);
        setDataArray(dataArray); // Update the state with the fetched data
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
      axios.get('https://fakestoreapi.com/products/category/electronics')
      .then(response => {
        
        const data = response.data;
        const dataArray = Array.isArray(data) ? data : [];
        // console.warn(dataArray);
        setDataE(dataArray); // Update the state with the fetched data
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
      axios.get('https://fakestoreapi.com/products/category/jewelery')
      .then(response => {
        
        const data = response.data;
        const dataArray = Array.isArray(data) ? data : [];
        // console.warn(dataArray);
        setDataJ(dataArray); // Update the state with the fetched data
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  }, []);
  const [search,setSearch] = useState("");
  return (
    <View style={{marginTop:50}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20}}>
          <View>
            <View>
              <Text style={{fontSize:25,marginLeft:-5,fontWeight:'500'}}> South TT Nagar </Text>
            </View>
            <View>
              <Text>Bhopal - Madhya Pradesh</Text>
            </View>
          </View>
          <View style={{margin:10}}>
            <Text>Icon</Text>
          </View>
        </View>
        <View style={{padding:20,justifyContent:'space-between',flexDirection:'row',borderWidth:2,margin:10,borderRadius:50,height:25,alignItems:'center'}}>
          <TextInput
          placeholder='Search..'
          onChangeText={(text)=>setSearch(text)}
          style={{height:25}}
          />
          <Text style={{height:25}}>Icon</Text>
        </View>
        <ScrollView style={{marginBottom:120}}>
          <View style={{flexDirection:'row'}}>
          <ScrollView style={styles.scrollView} >
            <Image
            style={{width:"auto",height:190,margin:10,borderRadius:10}}
             source={require('../assets/cover1.jpeg')}
            /><Image
            style={{width:"auto",height:190,margin:10,borderRadius:10}}
            source={require('../assets/cover2.jpeg')}
           /><Image
           style={{width:"auto",height:190,margin:10,borderRadius:10}}
           source={require('../assets/cover1.jpeg')}
          /><Image
          style={{width:"auto",height:190,margin:10,borderRadius:10}}
          source={require('../assets/cover2.jpeg')}
         />
          </ScrollView>
          </View>
          <View style={{margin:10}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{fontSize:25,fontWeight:'600'}}>Popular Products</Text>
              <Pressable onPress={()=>navigation.navigate("AllPro",{ screen: 'Main' ,arr: {dataArray}})}>
              <Text style={{margin:8,fontWeight:'600'}}>All Products-{'>'}</Text>
              </Pressable>
              </View>
            <View>
            <FlatList
                  data={dataArray}
                  horizontal
                  initialNumToRender={5}
                    renderItem={({ item }) => (
                        <View>
                            <View style={{padding:10,margin:10,alignItems:'flex-start',width:100}}>
                                <TouchableOpacity onPress={()=>navigation.navigate("Card",{ screen: 'Main',item :{item}})}>
                                <Image
                                    width={100}
                                    height={100}
                                    resizeMode={"cover"}
                                    source={{
                                        uri: item.image,
                                    }}
                                    alt="Alternate Text"
                                    style={{borderRadius:10,borderWidth:1,borderColor:'black'}}
                                />
                                <Text style={{width:100,marginTop:10,fontSize:18}} numberOfLines={2}>
                                {item.title}
                                </Text>
                                <Text style={{fontWeight:'500',marginTop:10}}>
                                ₹{item.price}
                                </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
          </View>
          <View style={{margin:10}}>
            <Text style={{fontSize:30,fontWeight:'600'}}>Shop By Category</Text>
          </View>
          <View style={{marginLeft:10}}>
            <Text style={{fontSize:17,fontWeight:'600'}}>Jewelery</Text>
          </View>
          <View>
          <FlatList
                  data={dataJ}
                  horizontal
                  initialNumToRender={5}
                    renderItem={({ item }) => (
                        <View>
                            <View style={{padding:10,margin:10,alignItems:'flex-start',width:100}}>
                            <TouchableOpacity onPress={()=>navigation.navigate("Card",{ screen: 'Main',item :{item}})}>
                                <Image
                                    width={100}
                                    height={100}
                                    resizeMode={"cover"}
                                    source={{
                                        uri: item.image,
                                    }}
                                    alt="Alternate Text"
                                    style={{borderRadius:10,borderWidth:1,borderColor:'black'}}
                                />
                                <Text style={{width:100,marginTop:10,fontSize:18}} numberOfLines={2}>
                                {item.title}
                                </Text>
                                <Text style={{fontWeight:'500',marginTop:10}}>
                                ₹{item.price}
                                </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
          </View>
          <View style={{marginLeft:10}}>
            <Text style={{fontSize:17,fontWeight:'600'}}>Electronics</Text>
          </View>
          <View>
          <FlatList
                  data={dataE}
                  horizontal
                  initialNumToRender={5}
                    renderItem={({ item }) => (
                        <View>
                            <View style={{padding:10,margin:10,alignItems:'flex-start',width:100}}>
                            <TouchableOpacity onPress={()=>navigation.navigate("Card",{ screen: 'Main',item :{item}})}>
                                <Image
                                    width={100}
                                    height={100}
                                    resizeMode={"cover"}
                                    source={{
                                        uri: item.image,
                                    }}
                                    alt="Alternate Text"
                                    style={{borderRadius:10,borderWidth:1,borderColor:'black'}}
                                />
                                <Text style={{width:100,marginTop:10,fontSize:18}} numberOfLines={2}>
                                {item.title}
                                </Text>
                                <Text style={{fontWeight:'500',marginTop:10}}>
                                ₹{item.price}
                                </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
          </View>
        </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  scrollView: {
    alignSelf: 'center',
    height:200
  },
})