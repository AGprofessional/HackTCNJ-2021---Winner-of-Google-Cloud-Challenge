import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native';

import { Image, TouchableOpacity} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
//import * as firebase from 'firebase'
import 'firebase/firestore';
import { firebase } from '@firebase/app';
import picture from "../../assets/iphone_picture.jpg";
import '@firebase/auth';
import '@firebase/firestore';


function writeFirebase(){

const firebaseConfig = {
    apiKey: "AIzaSyBj23uuMAWUK4PI0NizyNdKBlJH6gCFLMk",
    authDomain: "studyplan-649e4.firebaseapp.com",
    projectId: "studyplan-649e4",
    storageBucket: "studyplan-649e4.appspot.com",
    messagingSenderId: "889492028331",
    appId: "1:889492028331:web:8cf6bfc19ab5d00da330ee",
    measurementId: "G-WCZ25SMS2S"}
  // Initialize Firebase
  if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}else {
   firebase.app(); // if already initialized, use that one
}

  
const dbh = firebase.firestore();

dbh.collection("user_Akash").doc("syllabus_for_Math201").set({
   start_week: "01-20-2021",
   end_week:"05-14-2021",
  homework_start: "01-22-2021, 1 hour",
  homework_repeat:"every friday",
  exam1: "03-04-2021, 3pm to 5pm",
  final:"05-10-2021, 7am to 8am",
  
})

}
export default function Upload({navigation}) {
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  }
  
  return (<>
    <View style={styles.container}>
      <Image source={picture} style={styles.picture} />
      <Text style={styles.instructions}>
        Snap it. Import it. Upload it.
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.buttonA}>
        <Text style={styles.buttonText}>First, import Syllabus</Text>
      </TouchableOpacity >
<TouchableOpacity onPress={writeFirebase} style={styles.buttonB}>
        <Text style={styles.buttonText}>Second, upload to extract due dates</Text>
      </TouchableOpacity >

     

       <Button style={styles.button1}
        onPress={() => navigation.navigate('Activities')}
        title="Next, add your activities"
      >
      </Button>
      
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
  button1:{
    width:"40%",
    backgroundColor:"#79a9d1",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10,
     fontSize: 18,
  },
  picture: {
    width: 400,
    height: 250,
    marginBottom: 20,
  },
  instructions: {
   
    
    color: "2f323a",
    fontWeight:400,
    fontSize: 25,
    marginHorizontal: 15,
    marginBottom: 10,
  },
 buttonA: {
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    padding: 10,
    fontSize: 18,
    marginTop: 10,
   
  },
 
  buttonB: {
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    padding: 10,
    fontSize: 18,
    marginTop: 10,
    marginBottom:40,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  
  },
});