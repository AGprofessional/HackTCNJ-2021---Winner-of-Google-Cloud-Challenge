import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native';

import { Image, TouchableOpacity} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

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
  
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
      <Text style={styles.instructions}>
        Take a photo of your syllabus.  Then upload it!
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
    
        <Text style={styles.buttonText}>Upload</Text>
      
      </TouchableOpacity >
       <Button style={styles.button}
        onPress={() => navigation.navigate('Activities')}
        title="Now, add your activities"
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
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
   
    
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
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});