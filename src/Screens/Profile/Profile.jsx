import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import profileDp from '../../assets/ProfilePics/trainDp.jpg'

// icons 
import arrowIcon from '../../assets/SettingsIcons/arrow.png'

//Personal and Security Settings icons

import profileImg from "../../assets/SettingsIcons/profileIcon.png"
// import securityImg from "../../assets/SettingsIcons/security.png"
import notificationImg from "../../assets/SettingsIcons/notification.png"
import interfaceImg from "../../assets/SettingsIcons/interface.png"
import privacyImg from "../../assets/SettingsIcons/privacy.png"

// Subscription and Support

import subscriptionImg from "../../assets/SettingsIcons/subscribtion.png"
import helpImg from "../../assets/SettingsIcons/help.png"
import termImg from "../../assets/SettingsIcons/terms.png"

{/*  Account Management */}

import logout from "../../assets/SettingsIcons/logout.png"
import del from "../../assets/SettingsIcons/delete.png"




//Personal and Security Settings icons datas

const settingsData = [
  {
    id: 1,
    title: "Edit Profile",
    data: "Change personal details, update photos",
    icon: profileImg,
    arrow: arrowIcon,
    path:"editprofile"
  },
  // {
  //   id: 2,
  //   title: "Security",
  //   data: "Set password,  two-factor authentication",
  //   icon: securityImg,
  //   arrow: arrowIcon,
  //   path:"personalChat"
  // },
  {
    id: 3,
    title: "Notification",
    data: "toggle push notifications,  app sounds",
    icon: notificationImg,
    arrow: arrowIcon,
  },
  {
    id: 4,
    title: "User Interface",
    data: "Enable Dark or Light Mode",
    icon: interfaceImg,
    arrow: arrowIcon
  },
  {
    id: 5,
    title: "Privacy",
    data: "manage who can contact you, block users",
    icon: privacyImg,
    arrow: arrowIcon
  },
]

// Subscription and Support datas

const support = [
  {
    id: 1,
    title: "My subscription",
    data: "current plan, renew or upgrade subscription, billing history, manage payment methods",
    icon: subscriptionImg,
    arrow: arrowIcon
  },
  {
    id: 2,
    title: "Help & Support",
    data: "contact support, feedback, report a problem",
    icon: helpImg,
    arrow: arrowIcon
  },
  {
    id: 3,
    title: "Terms and Policies",
    data: "understand community guidelines,  license agreements",
    icon: termImg,
    arrow: arrowIcon
  },
]

{/*  Account Management datas */}

const account =[
  {
    id: 1,
    title: "Logout",
    icon: logout,
    arrow: arrowIcon
  },
  {
    id: 2,
    title: "Delete account",
    icon: del,
    arrow: arrowIcon
  },
]



const Profile = ({navigation}) => {
 
  return (
    <View style={styles.container}>
      <ScrollView>
      {/* <View style={styles.topbar}>
        <TouchableOpacity >
        <View>
          <Image source={backIcon} style={styles.backIcon} />
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('settings')}>
        <View>
          <Image source={settingsIcon} style={styles.settingsIcon} />
        </View>
        </TouchableOpacity>
      </View> */}
      <View style={styles.profile}>
        <View style={styles.topSection}>
          <View style={styles.img}>
            <Image source={profileDp} style={styles.profileImg} />
          </View>
          <View>
            <Text style={styles.name}>Akash Kottil</Text>
          </View>
        </View>
        <View style={styles.profilebtns}>
          <View><Text>@akashkottil</Text></View>
          <View style={styles.line}></View>
          <View><Text>9539987128</Text></View>
        </View>
      </View>
      <View style={styles.mainWrapper}>
        <ScrollView >
        <View style={styles.main}>

          {/* Personal and Security Settings */}

          <View style={styles.mainCard}>
            {
              settingsData.map((data) => (
                <TouchableOpacity style={styles.dataCard} onPress={() => navigation.navigate(data.path)}>
                  <View style={styles.cardLeft}>
                    <View>
                      <Image source={data.icon} style={styles.icons} />
                    </View>
                    <View style={styles.content}>
                      <Text style={styles.contentTitle}>{data.title}</Text>
                      <Text style={styles.contentPara}>{data.data}</Text>
                    </View>

                  </View>
                  <View>
                  <Image source={data.arrow} style={styles.arrowIcon} />
                  </View>
                </TouchableOpacity>
              ))
            }
          </View>

          {/* Subscription and Support */}

          <View style={styles.mainCard}>
            {
              support.map((data) => (
                <View style={styles.dataCard} onPress={() => navigation.navigate('personalChat')}>
                  <View style={styles.cardLeft}>
                    <View>
                      <Image source={data.icon} style={styles.icons} />
                    </View>
                    <View style={styles.content}>
                      <Text style={styles.contentTitle}>{data.title}</Text>
                      <Text style={styles.contentPara}>{data.data}</Text>
                    </View>

                  </View>
                  <View>
                    <Image source={data.arrow} style={styles.arrowIcon} />
                  </View>
                </View>
              ))
            }
          </View>

          {/*  Account Management */}

          <View style={styles.mainCard}>
            {
              account.map((data) => (
                <View style={styles.dataCard}>
                  <View style={styles.cardLeft}>
                    <View>
                      <Image source={data.icon} style={styles.icons} />
                    </View>
                    <View style={styles.content}>
                      <Text style={styles.contentTitle}>{data.title}</Text>
                    </View>

                  </View>
                  <View>
                    <Image source={data.arrow} style={styles.arrowIcon} />
                  </View>
                </View>
              ))
            }
          </View>


          
        </View>
        </ScrollView>
      </View>
      </ScrollView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
      paddingTop:30
  },
  
  topbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  settingsIcon: {
    height: 40,
    width: 40,
  },
  backIcon: {
    height: 30,
    width: 35
  },

  profileImg: {
    height: 150,
    width: 150,
    borderRadius: 100
  },
  profile:{
    gap:10
  },
  topSection:{
    justifyContent:"center",
    alignItems:"center",
    gap:20
  },
  name:{
    fontSize:35,
    fontWeight:"400",
    color:"black"
  },
  profilebtns:{
    display:"flex",
    flexDirection:"row",
    gap:20,
    justifyContent:"center",
    alignItems:"center"
  },
  
  line:{
      height:15,
      width:1,
      backgroundColor:"black"
  },
  mainWrapper: {
    paddingHorizontal: 10,
    flex: 20,
    borderRadius: 50,
    paddingVertical:20
  },
  main: {

    alignSelf: "stretch",

    gap: 20
  },
  mainCard: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 10,
  },
  icons: {
    height: 30,
    width: 30
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 25
  },
  dataCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,

  },
  arrowIcon: {
    height: 20,
    width: 20
  },
  contentTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "black"
  },
  contentPara:{
    width:250,
    fontSize:16
  }

})