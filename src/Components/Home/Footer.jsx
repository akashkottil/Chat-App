import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Heart from 'react-native-vector-icons/Entypo'
import Fb from 'react-native-vector-icons/Ionicons'
import Whatsapp from 'react-native-vector-icons/Ionicons'
import Insta from 'react-native-vector-icons/Ionicons'

import LottieView from 'lottie-react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <Text style={styles.title}>Alforia</Text>
          <View style={styles.madeWith}>
            <View><Text style={styles.text}>Made with</Text></View>
            <View>
              {/* <Heart name="heart" size={20} color="gray" /> */}
              <LottieView
            source={require('../../assets/animations/heart.json')}
            autoPlay
            loop={true}
            style={styles.lottie}
          />
            </View>
            <View><Text style={styles.text}>in India. </Text>
            
            </View>
          </View>
          <Text style={styles.text}> Powered by Virtual souls </Text>
            
        <View style={styles.socialMedia}>
          <View>
          <Fb name="logo-facebook" size={25} />
          </View>
          <View>
          <Whatsapp name="logo-whatsapp" size={25}  />
          </View>
          <View>
            <Insta name="logo-instagram" size={25} />
          </View>
        </View>
        </View>
      </View>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7DBDB",

  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 80
  },
  socialMedia: {
    flexDirection: "row",
    gap: 10,
    paddingTop:15,
    
  },
  title: {
    fontSize: 30,
    fontWeight: "600"
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    justifyContent: "center",
    alignItems: "center"
  },
  madeWith:{
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    // gap:8,
    flexWrap:"wrap"
  },
  lottie: {
    width: 50,
    height: 50,
  },

})