
import { StyleSheet, Text, View, Button} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import * as firebase from 'firebase'
import 'firebase/firestore';
import { firebase } from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

require('dotenv').config();

export default function Activities({navigation}) {
 
const [food,setFood] = useState(0);
const [sleep, setSleep] = useState(0);
const [social, setSocial]=useState(0);
const [e, setE] = useState(0);

    const transferState = ()=>{
      
    const firebaseConfig = {

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 
    apiKey: process.env.API_KEY,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
    }

  // Initialize Firebase
  if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}else {
   firebase.app(); // if already initialized, use that one
}

  
const dbh = firebase.firestore();
var cityRef = dbh.collection("user_Akash").doc("syllabus_for_Math201");

var setWithMerge = cityRef.set({
   food: food,
   sleep:sleep,
    socialization:social,
    exercise:e

}, { merge: true });


        
//now call generateCalendarLogic function, written in ViewCalendar.js for right now
    }
  
    return(
        <>
      <View style={styles.container}>
        <Text style={styles.title}>Every Day I Need:</Text>
        <Text style={styles.question}>Sleep</Text>
         <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
             keyboardType='numeric'
            placeholder="The number of hours I need are..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setSleep(text)}
           />
        </View>
        <Text style={styles.question}>Exercise</Text>
        <View style={styles.inputView} >
         <TextInput  
            style={styles.inputText}
            placeholder="The number of hours I need are..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setE(text)}
        />
            </View>
        <Text style={styles.question}>Time for friends and family</Text>
        <View style={styles.inputView} >
        <TextInput  
            style={styles.inputText}
            placeholder="The number of hours I need are..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setSocial(text)}
          />
            </View>
            
        <Text style={styles.question}>Time for breakfast, lunch, dinner, and snacks</Text>
        <View style={styles.inputView} >
        <TextInput  
            style={styles.inputText}
            placeholder="The number of hours I need are..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setFood(text)}
            />
            </View>
        <TouchableOpacity onPress={transferState} style={styles.buttonB}>
    
        <Text style={styles.buttonText}>Generate Calendar</Text>
      
      </TouchableOpacity >
      
  
      
      <Button style={styles.button}
        onPress={() => navigation.navigate('View Calendar')}
        title="View Calendar"
      >
      </Button>
      </View>
  </>
  );
}

/*
         */ 


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