import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import img1 from '../../assets/ProfilePics/trainDp.jpg';
import LinearGradient from 'react-native-linear-gradient';
import { useRoute } from '@react-navigation/native';

import Colors from '../../Constants/Colors';

const Chat = ({ navigation }) => {
  
  return (
    <View>
      <TouchableOpacity style={styles.backIcon} onPress={() => navigation.navigate('personalChat')}>
        <View style={styles.chats}>
          <View style={styles.left}>
            <View style={styles.ProPic}>
              <Image source={img1} style={styles.PropicImg} />
              <View style={styles.active}></View>
            </View>
            <View style={styles.chatDetails}>
              <Text style={styles.title}>Akash Kottil</Text>
              <Text style={styles.message}>Hey, Whatsapp?</Text>
            </View>
          </View>
          <View>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9673FF', '#522FDC']} style={styles.unread}>
              <Text style={styles.unreadText}>6</Text>
            </LinearGradient>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  chats: {
    alignSelf: "stretch",
    height: 80,
    backgroundColor: "white",
    borderRadius: 25,
    shadowColor: 'black',
    elevation: 2,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    flexDirection: "row"
  },
  unread: {
    height: 25,
    width: 25,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  unreadText: {
    color: "white",
    fontWeight: "600"
  },
  ProPic: {
    height: 60,
    width: 60,
    position: "relative"
  },
  PropicImg: {
    height: 60,
    width: 60,
    borderRadius: 30
  },
  active: {
    height: 12,
    width: 12,
    backgroundColor: "#00C92C",
    borderRadius: 100,
    position: "absolute",
    left: 45
  },
  title: {
    color: "black",
    fontWeight: "600",
  },
  message: {
    color: "black",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 30
  }
});
