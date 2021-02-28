//import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Activities({navigation}) {
    const [login, setLogin]=useState({email:"",
    password:""
  });
  
    return(
      <View style={styles.container}>
        <Text style={styles.logo}>Study Plan</Text>
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
        <TouchableOpacity style={styles.loginBtn}
        onPress={() => navigation.navigate('Upload')}
      >
          
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
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    color:'white',
    justifyContent:"center",
    padding:20,
    
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"blue",
    fontSize:11,
    fontWeight:"200",
    fontSize:17
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white",
    fontSize:17,
    fontWeight:"400"
  },
  signupText:{
    color:"blue",
    fontWeight:"200",
    fontSize:17
  }
});