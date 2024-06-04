import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import backIcon from '../../assets/Icons/backicon.png'
import settingsIcon from '../../assets/SettingsIcons/settings.png'
import profileImg from '../../assets/ProfilePics/trainDp.jpg'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
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
      </View>
      <View style={styles.profile}>
        <View style={styles.topSection}>
          <View style={styles.img}>
            <Image source={profileImg} style={styles.profileImg} />
          </View>
          <View>
            <Text style={styles.name}>Akash Kottil</Text>
          </View>
        </View>
        <View style={styles.profilebtns}>
          <View style={styles.profilebtn}>
            <Text>Share profile</Text>
          </View>
          <View style={styles.profilebtn}>
          <Text>edit profile</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
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
    gap:20
  },
  topSection:{
    justifyContent:"center",
    alignItems:"center",
    gap:20
  },
  name:{
    fontSize:35,
    fontWeight:"400",
  },
  profilebtns:{
    display:"flex",
    flexDirection:"row",
    gap:30,
    justifyContent:"center"
  },
  profilebtn:{
    backgroundColor:"white",
    paddingHorizontal:20,
    paddingVertical:15,
    borderRadius:30
  }
})