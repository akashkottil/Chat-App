import { View, StyleSheet, Text, Image } from 'react-native';
import React, { useState } from 'react'
import searchIcon from '../../assets/Icons/search.png'
import TrendingSlides from '../../Components/Home/TrendingSlides';
import ProfileCard from '../../Components/Home/ProfileCard';

import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../Constants/Colors';

import achu from '../../assets/Influencers/Achu.png'
import jinto from '../../assets/Influencers/jinto.jpeg'
import mamitha from '../../assets/Influencers/mamitha.jpg'
import shazam from '../../assets/Influencers/shazam.jpeg'
import frwd from '../../assets/Icons/frwdarrow.png'
import { Screen } from 'react-native-screens';
import { ScrollView } from 'react-native-gesture-handler';
import HomeTabs from '../../Components/Home/HomeTabs';






const Home = () => {

  const influencers = [
    {
      id: 1,
      name: "Aswathy achu",
      nameTag: "Ai influencer",
      img: achu,
    },
    {
      id: 2,
      name: "Mamitha",
      nameTag: "Ai Actress",
      img: mamitha,
    },
    {
      id: 3,
      name: "Shazam",
      nameTag: "Tech Ai influencer",
      img: shazam,
    },
    {
      id: 4,
      name: "Jinto",
      nameTag: "Fintness ai influencer",
      img: jinto,
    },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Text style={styles.topbarText}>Alforia</Text>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={Colors.gradient} style={styles.searchBox}>
          <Image source={searchIcon} style={styles.searchIcon} />
        </LinearGradient>
      </View>
      <ScrollView vertical={true} showsVerticalScrollIndicator={false} >
        <View>
          <TrendingSlides />
        </View>
        <View>
          <HomeTabs/>
        </View>
        <View style={styles.cardWrapper}>

          {

            influencers.map((influencer) => (
              <View style={styles.card}>
                <View>
                  <Image source={influencer.img} style={styles.images} />
                  <View style={styles.blackShade}></View>
                  <View style={styles.cardDetails}>
                    <View style={styles.text}>
                      <Text style={styles.cardName}>{influencer.name}</Text>
                      <Text style={styles.cardTag}>{influencer.nameTag}</Text>
                    </View>
                    {/* <View style={styles.cardButton}>
              <Image source={frwd}/>
            </View> */}
                  </View>
                </View>
              </View>
            ))
          }


          <View></View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  },
  topbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,

  },
  searchIcon: {
    height: 24,
    width: 20
  },
  searchBox: {
    
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    width: 40,
    height: 40,
  },
  cardWrapper: {
    flexWrap: "wrap",
    gap: 20,
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 40,
    alignItems: "center"
  },
  card: {
    width: 164,
    height: 218,
    borderRadius: 30,
    position: "relative"
  },
  cardDetails: {
    position: "absolute",
    bottom: 12,
    left: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 20


  },
  cardName: {
    color: "white",
    fontWeight: "600",
    fontSize: 16
  },
  cardTag: {
    color: "white",
  },
  images: {
    width: 164,
    height: 218,
    borderRadius: 30,
  },
  blackShade: {
    width: 164,
    height: 218,
    position: "absolute",
    zIndex: 10,
    backgroundColor: "black",
    borderRadius: 30,
    opacity: 0.3
  },
  topbarText:{
    fontSize:25,
    fontWeight:"600",
    color:"black"
  }

})