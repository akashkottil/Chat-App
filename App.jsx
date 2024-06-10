import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './src/Navigation/TabNavigator';
import PersonalChat from './src/Screens/Chats/PersonalChat';
import Login from './src/Screens/Login/Login';
import EditProfile from './src/Components/Profile/EditProfile';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#6a51ae" />
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="home" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="personalChat" component={PersonalChat} options={{ headerShown: false }} />
        <Stack.Screen name="editprofile" component={EditProfile} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
