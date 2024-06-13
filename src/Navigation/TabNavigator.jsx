import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home/Home';
import ChatScreen from '../Screens/Chats/ChatScreen';
import Profile from '../Screens/Profile/Profile';
import Feather from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../Constants/Colors';
import ReanimatedBottomTabs from 'reanimated-bottom-tabs';




const TabNavigator = () => {

  const Tab = createBottomTabNavigator();

  return (
    
    <Tab.Navigator tabBar={props => <ReanimatedBottomTabs {...props} />}>
    <Tab.Screen 
      options={{
        title: 'Home',
        // for icon you should set your custom icon for each screen using tabBarIcon:
        tabBarIcon: () => <Feather name="home" size={24} color="gray" />,
        headerShown:false
      }}
      name="Home"
      component={Home}
    />
    <Tab.Screen
      name="Chats"
      options={{
        title: 'Home',
        tabBarIcon: () => <MaterialIcons name="chat" size={24} color="gray" />,
        headerShown:false
      }}
      component={ChatScreen}
    />
    <Tab.Screen
      name="Profile"
      options={{
        title: 'Home',
        tabBarIcon: () => <Ionicons name="person" size={24} color="gray" />,
        headerShown:false
      }}
      component={Profile}
    />
  </Tab.Navigator>
  
  );
};

export default TabNavigator;

const styles = StyleSheet.create({

  container:{
    backgroundColor:"white",
    
  },
  btnContainer: {
    height: 40,
    width: 100,
    justifyContent: "center",
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  
})
