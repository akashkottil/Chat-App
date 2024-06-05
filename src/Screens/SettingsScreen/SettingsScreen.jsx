import { Image, StyleSheet, Text, View, ScrollView, Touchable } from 'react-native'
import React from 'react'
import backIcon from '../../assets/Icons/backicon.png'

// icons 
import arrowIcon from '../../assets/SettingsIcons/arrow.png'

//Personal and Security Settings icons

import profileImg from "../../assets/SettingsIcons/profileIcon.png"
import securityImg from "../../assets/SettingsIcons/security.png"
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
import { TouchableOpacity } from 'react-native-gesture-handler'


//Personal and Security Settings icons datas

const settingsData = [
  {
    id: 1,
    title: "Edit Profile",
    data: "Change personal details, update photos",
    icon: profileImg,
    arrow: arrowIcon
  },
  {
    id: 2,
    title: "Security",
    data: "Set password,  two-factor authentication",
    icon: securityImg,
    arrow: arrowIcon
  },
  {
    id: 3,
    title: "Notification",
    data: "toggle push notifications,  app sounds",
    icon: notificationImg,
    arrow: arrowIcon
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


const SettingsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <View style={styles.topbarTitlebox}>
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
          <View>
            <Image source={backIcon} style={styles.backIcon} />
          </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.title}>
              Settings
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.mainWrapper}>
        <ScrollView >
        <View style={styles.main}>

          {/* Personal and Security Settings */}

          <View style={styles.mainCard}>
            {
              settingsData.map((data) => (
                <View style={styles.dataCard}>
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

          {/* Subscription and Support */}

          <View style={styles.mainCard}>
            {
              support.map((data) => (
                <View style={styles.dataCard}>
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
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topbar: {
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    flex: 1,
    paddingVertical: 10
  },
  topbarTitlebox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15
  },
  backIcon: {
    height: 25,
    width: 30,
  },
  title: {
    fontSize: 35,
    color: "black"
  },
  mainWrapper: {
    paddingHorizontal: 10,
    flex: 20,
    borderRadius: 50,

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