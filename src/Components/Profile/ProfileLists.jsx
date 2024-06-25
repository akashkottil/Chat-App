// ProfileLists.js
import React, { useContext } from 'react';
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Switch } from 'react-native';
import { ThemeContext } from '../../DarkMode/ThemeContext'; // Adjust the path accordingly
import { useNavigation } from '@react-navigation/native';

import profileDp from '../../assets/ProfilePics/trainDp.jpg';
import arrowIcon from '../../assets/SettingsIcons/arrow.png';
import profileImg from "../../assets/SettingsIcons/profileIcon.png";
import notificationImg from "../../assets/SettingsIcons/notification.png";
import interfaceImg from "../../assets/SettingsIcons/interface.png";
import privacyImg from "../../assets/SettingsIcons/privacy.png";
import subscriptionImg from "../../assets/SettingsIcons/subscribtion.png";
import helpImg from "../../assets/SettingsIcons/help.png";
import termImg from "../../assets/SettingsIcons/terms.png";
import logout from "../../assets/SettingsIcons/logout.png";
import del from "../../assets/SettingsIcons/delete.png";


//Personal and Security Settings icons data
const settingsData = [
  {
    id: 1,
    title: "Edit Profile",
    data: "Change personal details, update photos",
    icon: profileImg,
    arrow: arrowIcon,
    path: "editprofile"
  },
  {
    id: 3,
    title: "Notification",
    data: "toggle push notifications, app sounds",
    icon: notificationImg,
    arrow: arrowIcon,
    path: "notification"
  },
  {
    id: 4,
    title: "User Interface",
    data: "Enable Dark or Light Mode",
    icon: interfaceImg,
    Component: ({ toggleTheme, isDarkMode }) => (
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleTheme}
        value={isDarkMode}
      />
    )
  },
  {
    id: 5,
    title: "Privacy",
    data: "manage who can contact you, block users",
    icon: privacyImg,
    arrow: arrowIcon,
    path:"privacy"
  },
];

// Subscription and Support data
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
    data: "understand community guidelines, license agreements",
    icon: termImg,
    arrow: arrowIcon,
    path: "terms"
  },
];

// Account Management data
const account = [
  {
    id: 1,
    title: "Logout",
    icon: logout,
    arrow: arrowIcon,
    onPress: () => showLogoutAlert()
  },
  {
    id: 2,
    title: "Delete account",
    icon: del,
    arrow: arrowIcon
  },
];

const showLogoutAlert = () => {
  Alert.alert(
    "Logout",
    "Are you sure you want to logout?",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Logout cancelled"),
        style: "cancel"
      },
      {
        text: "Logout",
        onPress: () => console.log("User logged out"),
      }
    ]
  );
};

const ProfileLists = () => {
  const navigation = useNavigation();
  const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.bgColor }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profile}>
          <View style={styles.topSection}>
            <View style={styles.img}>
              <Image source={profileDp} style={styles.profileImg} />
            </View>
            <Text style={[styles.name, { color: theme.white }]}>Akash Kottil</Text>
          </View>
          <View style={styles.profilebtns}>
            <Text style={[styles.profileText, { color: theme.white }]}>@akashkottil</Text>
            <View style={[styles.line, { backgroundColor: theme.white }]}></View>
            <Text style={[styles.profileText, { color: theme.white }]}>9539987128</Text>
          </View>
        </View>
        <View style={styles.mainWrapper}>
          <ScrollView>
            <View style={styles.main}>
              <View style={[styles.mainCard, { backgroundColor: theme.cards }]}>
                {settingsData.map((data) => (
                  <TouchableOpacity key={data.id} style={styles.dataCard} onPress={() => data.path && navigation.navigate(data.path)}>
                    <View style={styles.cardLeft}>
                      <Image source={data.icon} style={styles.icons} />
                      <View style={styles.content}>
                        <Text style={[styles.contentTitle, { color: theme.white }]}>{data.title}</Text>
                        <Text style={[styles.contentPara, { color: theme.white }]}>{data.data}</Text>
                      </View>
                    </View>
                    <View>
                      {data.Component ? <data.Component toggleTheme={toggleTheme} isDarkMode={isDarkMode} /> : <Image source={data.arrow} style={styles.arrowIcon} />}
                    </View>
                  </TouchableOpacity>
                ))}
              </View>


              <View style={[styles.mainCard, { backgroundColor: theme.cards }]}>
              {support.map((data) => (
                <TouchableOpacity key={data.id} style={styles.dataCard} onPress={() => data.path && navigation.navigate(data.path)}>
                  <View style={styles.cardLeft}>
                    <Image source={data.icon} style={styles.icons} />
                    <View style={styles.content}>
                      <Text style={[styles.contentTitle, { color: theme.white }]}>{data.title}</Text>
                      <Text style={[styles.contentPara, { color: theme.white }]}>{data.data}</Text>
                    </View>
                  </View>
                  <Image source={data.arrow} style={styles.arrowIcon} />
                  </TouchableOpacity>
              ))}
              </View>

              <View style={[styles.mainCard, { backgroundColor: theme.cards }]}>

              {account.map((data) => (
                <TouchableOpacity key={data.id} style={styles.dataCard} onPress={data.onPress}>
                  <View style={styles.cardLeft}>
                    <Image source={data.icon} style={styles.icons} />
                    <Text style={[styles.contentTitle, { color: theme.white }]}>{data.title}</Text>
                  </View>
                </TouchableOpacity>
              ))}
              </View>
              
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileLists;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  profile: {
    gap: 10,
  },
  topSection: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  profileImg: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  name: {
    fontSize: 35,
    fontWeight: "400",
  },
  profilebtns: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: {
    fontSize: 16,
  },
  line: {
    height: 15,
    width: 1.5,
  },
  mainWrapper: {
    paddingHorizontal: 10,
    flex: 20,
    borderRadius: 50,
    paddingTop:20,
    paddingBottom:75
  },
  main: {
    alignSelf: "stretch",
    gap: 20,
  },
  mainCard: {
    borderRadius: 20,
    paddingVertical: 10,
  },
  icons: {
    height: 30,
    width: 30,
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 25,
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
    width: 20,
  },
  contentTitle: {
    fontSize: 16,
    fontWeight: "800",
  },
  contentPara: {
    width: 250,
    fontSize: 16,
  },
});
