import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import backIcon from '../../assets/Icons/backicon.png'
import menu from "../../assets/Icons/menu.png"
import giftImg from '../../assets/Icons/gift.png'
import sendImg from '../../assets/Icons/send.png'
import { useRoute } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import LottieView from 'lottie-react-native'

const PersonalChat = ({ navigation }) => {
  const route = useRoute();
  const { userId, userName, userMessage, userImage } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <View style={styles.left}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backIcon} style={styles.backIcon} />
          </TouchableOpacity>

          <View style={styles.proDetails}>
            <Image source={userImage} style={styles.propicimg}></Image>
            <View>
              <Text style={styles.name}>{userName}</Text>
              <View style={styles.statusbar}>
                <Text style={styles.status}>Active now</Text>
                <View style={styles.active}></View>
              </View>
            </View>
          </View>
        </View>
        <Image source={menu} style={styles.menuImg}></Image>
      </View>
      <View style={styles.main}>
        <ScrollView>
        {userMessage && userMessage.length > 0 ? (
            userMessage.map((message, index) => (
              <View key={index} style={styles.msgWrapper}>
                {message.sender === "ai" ? (
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#522FDC', '#9673FF']}
                    style={styles.messageBox}
                  >
                    <Text style={styles.messageText}>{message.text}</Text>
                  </LinearGradient>
                ) : (
                  <View style={styles.messageBox}>
                    <Text style={styles.messageText}>{message.text}</Text>
                  </View>
                )}
              </View>
            ))
          ) : (
            <View style={[styles.noTextView, {justifyContent:"center", alignItems:"center", flex:1}]}>
            <Text style={[styles.noMessagesText, {}]}>No messages yet</Text>
            <LottieView
            source={require('../../assets/animations/heart.json')}
            autoPlay
            loop={true}
            style={styles.lottie}
          />
            </View>
          )}
        </ScrollView>
      </View>
      <View style={styles.bottombar}>
        <View style={styles.gift}>
          <Image source={giftImg} style={styles.giftImg}></Image>
        </View>
        <TextInput
          style={styles.messageInput}
          placeholder="Message"
        />
        <View style={styles.send}>
          <Image source={sendImg} style={styles.sendImg}></Image>
        </View>
      </View>
    </View>
  )
}

export default PersonalChat

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8"
  },
  topbar: {
    flexDirection: "row",
    backgroundColor: "#F8F8F8",
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: "space-between",
    zIndex: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  main: {
    flex: 15
  },
  bottombar: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    // Removed gap and added margin for compatibility in React Native
    marginRight: 15,
  },
  backIcon: {
    height: 18,
    width: 20,
  },
  propicimg: {
    height: 45,
    width: 45,
    borderRadius: 100
  },
  proDetails: {
    flexDirection: "row",
    alignItems: "center",
    // Removed gap and added margin for compatibility in React Native
    marginRight: 15,
  },
  name: {
    fontWeight: "800",
    color: "black"
  },
  status: {
    color: "black",
    fontWeight: "300",
    paddingRight: 10
  },
  menuImg: {
    height: 35,
    width: 20,
    paddingTop: 15
  },
  gift: {
    height: 50,
    width: 50,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  giftImg: {
    height: 22,
    width: 25
  },
  send: {
    height: 50,
    width: 50,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  sendImg: {
    height: 22,
    width: 23,
  },
  messageInput: {
    backgroundColor: "white",
    width: 254,
    borderRadius: 30,
    paddingHorizontal: 30,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  active: {
    height: 8,
    width: 8,
    backgroundColor: "#00C92C",
    borderRadius: 100,
    position: "absolute",
    right: 0
  },
  statusbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  messageBox: {
    width: 243,
    backgroundColor: "#F2F2F2",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  messageText: {
    fontSize: 17,
    fontWeight: "400",
    color: "black",
  },
  msgWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignSelf:"stretch",
  },
  usermessageBox: {
    width: 243,
    backgroundColor: "#F2F2F2",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    shadowColor: "black",
    alignItems:"flex-end",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    lottie: {
      width: 50,
      height: 50,
    },
  },
});


