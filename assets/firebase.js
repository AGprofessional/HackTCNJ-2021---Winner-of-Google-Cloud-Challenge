import * as firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBj23uuMAWUK4PI0NizyNdKBlJH6gCFLMk",
    authDomain: "studyplan-649e4.firebaseapp.com",
    projectId: "studyplan-649e4",
    storageBucket: "studyplan-649e4.appspot.com",
    messagingSenderId: "889492028331",
    appId: "1:889492028331:web:8cf6bfc19ab5d00da330ee",
    measurementId: "G-WCZ25SMS2S"}
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);