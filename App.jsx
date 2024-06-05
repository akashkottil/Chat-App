import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './src/Navigation/TabNavigator';
import PersonalChat from './src/Screens/Chats/PersonalChat';
import SettingsScreen from './src/Screens/SettingsScreen/SettingsScreen';
import EditProfile from './src/Screens/Profile/EditProfile';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#6a51ae" />
      <Stack.Navigator>
        <Stack.Screen name="home" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="settings" component={SettingsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="personalChat" component={PersonalChat} options={{ headerShown: false }} />
        <Stack.Screen name="Editprofile" component={EditProfile} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
