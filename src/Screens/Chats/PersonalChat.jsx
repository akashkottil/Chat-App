import { StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native'
import React from 'react'

import backIcon from '../../assets/Icons/backicon.png'
import proPIc from '../../assets/ProfilePics/trainDp.jpg'
import menu from "../../assets/Icons/menu.png"
import giftImg from '../../assets/Icons/gift.png'
import sendImg from '../../assets/Icons/send.png'
import UserMessage from '../../Components/Chats/UserMessage'
import AiMessage from '../../Components/Chats/AiMessage'


const PersonalChat = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <View style={styles.left}>
            <View>
                <Image source={backIcon} style={styles.backIcon}/>
            </View>
            <View style={styles.proDetails}>
                <View >
                    <Image source={proPIc} style={styles.propicimg}></Image>
                </View>
                <View>
                    <Text style={styles.name}>Akash Kottil</Text>
                    <View style={styles.statusbar}>
                        <View>
                    <Text style={styles.status}>Active now</Text>
                    </View>
                    <View style={styles.active}></View>
                    </View>
                </View>
            </View>
        </View>
        <View>
            <Image source={menu} style={styles.menuImg}></Image>
        </View>
      </View>
            <View style={styles.main}>
        <ScrollView>
                    <UserMessage/>
                    <AiMessage/>
        </ScrollView>
            </View>
        <View style={styles.bottombar}>
            <View style={styles.gift}>
                <Image source={giftImg} style={styles.giftImg}></Image>
            </View>
            <View>
            <TextInput
            style={styles.messageInput}
            placeholder="Message"
          />
            </View>
            <View style={styles.send}>
                <Image source={sendImg} style={styles.sendImg}></Image>
            </View>
        </View>
    </View>
  )
}

export default PersonalChat

const styles = StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: "#F8F8F8"
  },
  topbar: {
    flexDirection: "row",
    backgroundColor: "#F8F8F8",
    paddingHorizontal: 20,
    paddingVertical:15,
    flex:1,
    justifyContent: "space-between",
    zIndex: 10,
    // Shadow for iOS
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 4,
    
  },
  main:{
    flex:15
  },
  bottombar:{
    flex:2,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around"

  },
  left:{
    flexDirection:"row",
    alignItems:"center",
    gap:15
  },
  backIcon:{
    height:18,
    width:20,
  },

propicimg:{
    height:45,
    width:45,
    borderRadius:100
},
proDetails:{
    flexDirection:"row",
    alignItems:"center",
    gap:15
},
name:{
    fontWeight:"800",
    color:"black"
},
status:{
    color:"black",
    fontWeight:"300",
    paddingRight:10
},
menuImg:{
    height:35,
    width:20,
    paddingTop:15
},
gift:{
    height:50,
    width:50,
    backgroundColor:"#F2F2F2",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:100,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 4,
},
giftImg:{
    height:22,
    width:25
},
send:{
    height:50,
    width:50,
    backgroundColor:"#F2F2F2",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:100,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 4,
},
sendImg:{
    height:22,
    width:23,
},
messageInput:{
    backgroundColor:"white",
    // height:36,
    width:254,
    borderRadius:30,
    paddingHorizontal:30,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 3,
},
active:{
    height:8,
    width:8,
    backgroundColor:"#00C92C",
    borderRadius:100,
    position:"absolute",
    right:0
  },
  statusbar:{
    justifyContent:"center",
  }

  
})