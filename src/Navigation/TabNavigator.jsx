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




const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (

    <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tabButton, focused ? styles.btnContainer : null]}  >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={focused ? Colors.gradient : ['transparent', 'transparent']}
                style={styles.btnContainer}>
                <Feather
                  name={focused ? 'home' : 'home'}
                  size={26}
                  color={focused ? '#F4F2F2' : '#222'}
                />
                {focused && <Text style={{ color: '#F4F2F2', fontSize: 20, }}>Home</Text>}
              </LinearGradient>
            </View>

          ),
        }}
      />
      <Tab.Screen name="chats" component={ChatScreen} options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style={[styles.tabButton, focused ? styles.btnContainer : null]}  >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={focused ? Colors.gradient : ['transparent', 'transparent']}
              style={styles.btnContainer}>
              <MaterialIcons
                name={focused ? 'chat' : 'chat'}
                size={26}
                color={focused ? Colors.tabActive : '#222'} />
              {focused && <Text style={{ color: Colors.tabActive, fontSize: 20 }}>Chats</Text>}
            </LinearGradient>
          </View>
        )

      }} />

      <Tab.Screen name="Profile" component={Profile} options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style={[styles.tabButton, focused ? styles.btnContainer : null]}  >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={focused ? Colors.gradient : ['transparent', 'transparent']}
              style={styles.btnContainer}>
              <Ionicons
                name={focused ? 'person' : 'person'}
                size={26}
                color={focused ? Colors.tabActive : '#222'} />
              {focused && <Text style={{ color: Colors.tabActive, fontSize: 20 }}>Profile</Text>}
            </LinearGradient>
          </View>
        )
      }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({


  btnContainer: {
    height: 40,
    width: 100,
    justifyContent: "center",
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  }
})
