import { StyleSheet, Text, View, Button} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import picture1 from "../../assets/finalcalendar.jpg";


//import * as firebase from 'firebase'
import 'firebase/firestore';
import { firebase } from '@firebase/app';
import '@firebase/auth'
import '@firebase/firestore'

require('dotenv').config();


    export default function ViewCalendar(){
 const readBackData=()=>{

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
  
  // Initialize Firebase
  if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}else {
   firebase.app(); // if already initialized, use that one
}

  
const dbh = firebase.firestore();
var docRef = dbh.collection("user_Akash").doc("syllabus_for_Math201");

docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        readFirebaseJSON=doc.data();
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
 }
// <Image source={picture1} style={styles.picture} />
    return(
      <>
      
      <View style={styles.container}>
   
     
       <TouchableOpacity onPress={readBackData} style={styles.loginBtn}>
         
          <Text style={styles.loginText}>Go to Google Calendar</Text>
      
        </TouchableOpacity>
        </View>
        </>
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
    
  },
  picture:{
    width:300,
    height:300
  }
});