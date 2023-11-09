import { StatusBar } from "expo-status-bar";
import React, { useState,useContext, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import {LogContext} from '../Context/LogContext'

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const logState = useContext(LogContext);
  useEffect(()=>{
    if(logState.log === true){
        navigation.navigate("Main")
    }
  },[logState.log])
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/favicon.png")} /> 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <TouchableOpacity>
        <Text style={styles.forgot_button} onPress={()=> navigation.navigate("SignUp")}>Haven't login? Sign up</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn} onPress={()=>{
        logState.setLog(!logState.log)
        }}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
    </View> 
  );
}


export function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
  const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/favicon.png")} /> 
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          /> 
        </View> 
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          /> 
        </View> 
        <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
          <Text style={styles.forgot_button}>Have an Account? Login</Text> 
        </TouchableOpacity> 
        <TouchableOpacity style={styles.loginBtn} onPress={()=> navigation.navigate("Main")}>
          <Text style={styles.loginText}>SignUp</Text> 
        </TouchableOpacity> 
      </View> 
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
    height:40,
    width:40
  },
  inputView: {
    backgroundColor: "#7cd4fc",
    borderRadius: 30,
    width: 250,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: 100,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#0b28e3",
  },
  loginText:{
    color:'white'
  }
});
