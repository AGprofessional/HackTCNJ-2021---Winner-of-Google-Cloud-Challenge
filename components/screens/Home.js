//import React from 'react';
import { StyleSheet} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function HomeScreen({navigation}) {
    const [login, setLogin]=useState({email:"",
    password:""
  }); 
    return(
      <View style={styles.container}>
        <Text style={styles.logo}>All Hands on Deck</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={text => setLogin({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setLogin({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Upload')} style={styles.loginBtn}>
         
          <Text style={styles.loginText}>LOGIN</Text>
      
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.signupText}>Signup</Text>
        </TouchableOpacity>

  
      </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "debac0",
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:100,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"40%",
    backgroundColor:"#79a9d1",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
    outline:"none",

  },
  inputText:{
    height:70,
    color:"2f323a",
    //fontWeight:400,
     outline:"none",
  },
  forgot:{
    color:"2f323a",
    fontSize:17
  },
  loginBtn:{
    width:"40%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10,
     fontSize: 18,
  },
  loginText:{
    color:"2f323a",
         fontSize: 30,

  },
  signupText:{
    color:"2f323a",
    fontSize: 18,
    
  }
});