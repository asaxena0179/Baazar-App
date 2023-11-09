import { StyleSheet, Text, View,FlatList, Pressable,Image} from 'react-native'
import {React , useContext,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import {LogContext} from '../Context/LogContext'
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';

const Profile = () => {
    const logState = useContext(LogContext)
    const navigation = useNavigation()
    useEffect(()=>{
        if(logState.log === false){
            navigation.navigate("Login",{ screen: 'Main' })
        }
    },[logState.log])
  return (
    <View style={{marginTop:50,backgroundColor:'#edf3fc'}}>
        <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'black',padding:20,}}>
        <Text style={{fontSize:32,color:'aliceblue'}}>My Profile</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'space-between',flexDirection:'row',padding:15,marginVertical:8,backgroundColor:'white',borderWidth:2,borderColor:'#edf3fc'}}>
            <Text>@@</Text>
            <Text>Aman Saxena</Text>
        </View>
        <View>
            <View style = {{alignItems:'center',flexDirection:'row',padding:15,backgroundColor:'white',borderWidth:2,borderColor:'#DDE6ED'}}>
                <Text>Icon</Text>
                <Text style={{marginLeft:25,textTransform:'capitalize',fontWeight:'bold'}}>Help Center</Text>
            </View>
            <View style = {{alignItems:'center',flexDirection:'row',padding:15,backgroundColor:'white',borderWidth:2,borderColor:'#DDE6ED'}}>
                <Text>Icon</Text>
                <Text style={{marginLeft:25,textTransform:'capitalize',fontWeight:'bold'}}>Help Center</Text>
            </View>
            <View style = {{alignItems:'center',flexDirection:'row',padding:15,backgroundColor:'white',borderWidth:2,borderColor:'#DDE6ED'}}>
                <Text>Icon</Text>
                <Text style={{marginLeft:25,textTransform:'capitalize',fontWeight:'bold'}}>Help Center</Text>
            </View>
            <View style = {{alignItems:'center',flexDirection:'row',padding:15,backgroundColor:'white',borderWidth:2,borderColor:'#DDE6ED'}}>
                <Text>Icon</Text>
                <Text style={{marginLeft:25,textTransform:'capitalize',fontWeight:'bold'}}>Help Center</Text>
            </View>
            <View style = {{alignItems:'center',flexDirection:'row',padding:15,backgroundColor:'white',borderWidth:2,borderColor:'#DDE6ED'}}>
                <Text>Icon</Text>
                <Text style={{marginLeft:25,textTransform:'capitalize',fontWeight:'bold'}}>Help Center</Text>
            </View>
            <View style = {{alignItems:'center',flexDirection:'row',padding:15,backgroundColor:'white',borderWidth:2,borderColor:'#DDE6ED'}}>
                <Text>Icon</Text>
                <Text style={{marginLeft:25,textTransform:'capitalize',fontWeight:'bold'}}>Help Center</Text>
            </View>
            <View style = {{alignItems:'center',flexDirection:'row',padding:15,backgroundColor:'white',borderWidth:2,borderColor:'#DDE6ED'}}>
                <Text>Icon</Text>
                <Text style={{marginLeft:25,textTransform:'capitalize',fontWeight:'bold'}}>Help Center</Text>
            </View>
            <View style = {{alignItems:'center',flexDirection:'row',padding:15,backgroundColor:'white',borderWidth:2,borderColor:'#DDE6ED'}}>
                <Text>Icon</Text>
                <Text style={{marginLeft:25,textTransform:'capitalize',fontWeight:'bold'}}>Help Center</Text>
            </View>
            <View style = {{alignItems:'center',flexDirection:'row',padding:15,backgroundColor:'white',borderWidth:2,borderColor:'#DDE6ED'}}>
                <Text>Icon</Text>
                <Text style={{marginLeft:25,textTransform:'capitalize',fontWeight:'bold'}}>Help Center</Text>
            </View>
            <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'white',padding:8}}>
                <Pressable onPress={()=> {
            logState.setLog(!logState.log)
        }}>
            <Text style={{textTransform:'capitalize',fontWeight:'bold', color:'red',paddingTop:5}}>SignOut</Text>
        </Pressable>
            </View>
        </View>
        <StatusBar style=''/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})