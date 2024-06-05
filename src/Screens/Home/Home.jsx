import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import searchIcon from "../../assets/Icons/search.png"

import Colors from '../../Constants/Colors'
import LinearGradient from 'react-native-linear-gradient'
import TrendingSwiper from './TrendingSwiper'


const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Text style={styles.title}>Trending</Text>
        <LinearGradient colors={Colors.gradient} style={styles.searchbg}>
          <Image source={searchIcon} style={styles.searchIcon}/>
        </LinearGradient>
      </View>
      <TrendingSwiper/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
   },
   topbar:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:20,
    paddingVertical:15
   },
   searchIcon:{
    height:21,
    width:23,
   },
   searchbg:{
      width:40,
      height:40,
      alignItems:"center",
      justifyContent:"center",
      borderRadius:100
   },
   title:{
    fontSize:26,
    color:"black"
   }
})