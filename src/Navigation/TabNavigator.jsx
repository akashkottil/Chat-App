import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home/Home';
import ChatScreen from '../Screens/Chats/ChatScreen';
import Profile from '../Screens/Profile/Profile';
import Discover from '../Screens/Discover/Discover';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="chats" component={ChatScreen} options={{ headerShown: false }} />
      <Tab.Screen name="discover" component={Discover} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
