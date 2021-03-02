import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./components/screens/Home";
import UploadScreen from "./components/screens/Upload";
import ActivitiesScreen from "./components/screens/Activities";
import ViewCalendarScreen from "./components/screens/ViewCalendar";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Upload" component={UploadScreen} />
          <Stack.Screen name="Activities" component={ActivitiesScreen} />
          <Stack.Screen name="View Calendar" component={ViewCalendarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

