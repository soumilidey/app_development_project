import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import ProfileScreen from "./screens/Profile";
import DonateScreen from "./screens/Donate";
import MessageScreen from "./screens/Message";

const Stack = createStackNavigator();

function App() {
  return (    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Donate" component={DonateScreen} />
        <Stack.Screen name="Message" component={MessageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;