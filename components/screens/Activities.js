
import { StyleSheet, Text, View, Button} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function sendState(){}

export default function Activities({navigation}) {
    const [data, setData]=useState(
{    food:0,
    sleep:0,
    socialization:0,
    exercise:0
}
    );
  
 
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Every Day I Need:</Text>
        <Text style={styles.question}>Sleep</Text>
         <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
             keyboardType='numeric'
            placeholder="The number of hours I need are..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setData({sleep:text})}/>
        </View>
        <Text style={styles.question}>Exercise</Text>
        <View style={styles.inputView} >
         <TextInput  
            style={styles.inputText}
            placeholder="The number of hours I need are..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setData({exercise:text})}/>
            </View>
        <Text style={styles.question}>Time for friends and family</Text>
        <View style={styles.inputView} >
        <TextInput  
            style={styles.inputText}
            placeholder="The number of hours I need are..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setData({socializing:text})}/>
            </View>
            
        <Text style={styles.question}>Time for breakfast, lunch, dinner, and snacks</Text>
        <View style={styles.inputView} >
        <TextInput  
            style={styles.inputText}
            placeholder="The number of hours I need are..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setData({eating:text})}/>
            </View>
        <TouchableOpacity onPress={sendState} style={styles.buttonB}>
    
        <Text style={styles.buttonText}>Generate Calendar</Text>
      
      </TouchableOpacity >
         <Button style={styles.button}
        onPress={() => navigation.navigate('ViewCalendar')}
        title="View Calendar"
      >
      </Button>
  
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
 title:{
    fontWeight:"bold",
    fontSize:45,
    color:"#fb5b5a",
    margin:20
  },
   buttonB: {
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    padding: 10,
    fontSize: 18,
    marginTop: 10,
    marginBottom:20,
  },
  question: {
    color: "2f323a",
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  buttonText:{

    fontSize:25,
    padding:5
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
    margin: 20,
  },
  inputText: {
     color:"2f323a",
    fontSize:17,
  },
  inputView:{
    width:"25%",
    backgroundColor:"#79a9d1",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
});