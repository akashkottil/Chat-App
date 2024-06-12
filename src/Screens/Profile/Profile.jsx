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
  const [currentScreen, setCurrentScreen] = useState("profilelist");


  const switchToList = () => {
    setCurrentScreen('profilelist');
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
    <View>
      {/* <ProfileLists/> */}

    {
      currentScreen === "profilelist" && (
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
        <Privacy/>
      )
    }
    {
      currentScreen === "subscribtion" && (
        <Subscribtion/>
      )
    }
    {
      currentScreen === "help" && (
        <Help/>
      )
    }
    {
      currentScreen === "terms" && (
        <Terms/>
      )
    }



    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})