//import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DropDownPicker from 'react-native-dropdown-picker';
import firestore from '@react-native-firebase/firestore';


function writeFirebase(){
firestore()
  .collection('Users')
  .add({
    name: 'Ada Lovelace',
    age: 30,
  })
  .then(() => {
    console.log('User added!');
  });
}

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
        <Text style={styles.title}>Each Day</Text>
        <Text style={styles.question}>Hours of sleep needed:</Text>
         <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
             keyboardType='numeric'
            placeholder="Number of hours" 
            placeholderTextColor="#003f5c"
            onChangeText={text => setData({sleep:text})}/>
        </View>
        <Text style={styles.question}>Hours of exercise needed:</Text>
        <View style={styles.inputView} >
         <TextInput  
            style={styles.inputText}
            placeholder="Number of hours" 
            placeholderTextColor="#003f5c"
            onChangeText={text => setData({exercise:text})}/>
            </View>
        <Text style={styles.question}>Hours of socializing time needed:</Text>
        <View style={styles.inputView} >
        <TextInput  
            style={styles.inputText}
            placeholder="Number of hours" 
            placeholderTextColor="#003f5c"
            onChangeText={text => setData({socializing:text})}/>
            </View>
            
        <Text style={styles.question}>Hours of eating time needed:</Text>
        <View style={styles.inputView} >
        <TextInput  
            style={styles.inputText}
            placeholder="Number of hours" 
            placeholderTextColor="#003f5c"
            onChangeText={text => setData({eating:text})}/>
            </View>
        <TouchableOpacity onPress={writeFirebase} style={styles.button}>
    
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
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize:30,
  },
  question: {
    color: 'blue',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
    margin: 20,
  },
  inputText: {
    fontSize: 20,
    color: '#fff',
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
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