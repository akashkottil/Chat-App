import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ProfileLists from '../../Components/Profile/ProfileLists'
import EditProfile from '../../Components/Profile/EditProfile';
import Notification from '../../Components/Profile/Notification';
import Privacy from '../../Components/Profile/Privacy';
import Subscribtion from '../../Components/Profile/Subscribtion';
import Help from '../../Components/Profile/Help';
import Terms from '../../Components/Profile/Terms';

const Profile = () => {
  const [currentScreen, setCurrentScreen] = useState("profile");

  const switchToList = () => {
    setCurrentScreen('profile');
  }
  const switchToEdit = () => {
    setCurrentScreen('editprofile');
  }
  const switchToNotification = () => {
    setCurrentScreen('notification');
  }
  const switchToPrivacy = () => {
    setCurrentScreen('privacy');
  }
  const switchToSubscribtion = () => {
    setCurrentScreen('subscribtion');
  }
  const switchToHelp = () => {
    setCurrentScreen('help');
  }
  const switchToTerms = () => {
    setCurrentScreen('terms');
  }


  return (
    <View style={styles.container}>
      {/* <ProfileLists/> */}

    {
      currentScreen === "profile" && (
        <ProfileLists 
        switchToEdit={switchToEdit}
        switchToNotification={switchToNotification}
        switchToPrivacy={switchToPrivacy}
        switchToSubscribtion={switchToSubscribtion}
        switchToHelp={switchToHelp}
        switchToTerms={switchToTerms}
        />
      )
    }
    {
      currentScreen === "editprofile" && (
        <EditProfile/>
      )
    }
    {
      currentScreen === "notification" && (
        <Notification/>
      )
    }
    {
      currentScreen === "privacy" && (
        <Privacy switchToList={switchToList}/>
      )
    }
    {
      currentScreen === "subscribtion" && (
        <Subscribtion switchToList={switchToList}/>
      )
    }
    {
      currentScreen === "help" && (
        <Help/>
      )
    }
    {
      currentScreen === "terms" && (
        <Terms switchToList={switchToList}/>
      )
    }



    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})