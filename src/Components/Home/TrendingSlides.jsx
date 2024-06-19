import { Button, View, StyleSheet, Text, Image } from 'react-native';
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'



// influencers images

import achu from '../../assets/Influencers/Achu.png'
import bellie from '../../assets/Influencers/bellie.png'
import helen from '../../assets/Influencers/helen.png'
import keira from '../../assets/Influencers/keira.png'
import lilly from '../../assets/Influencers/lilly.png'


const TrendingSlides = () => {

  const influencers = [
    {
        id:1,
        name: "Aswathy Achu",
        nameTag: "Ai influencer",
        img:achu
    },
    {
        id:2,
        name: "bellie",
        nameTag: "Ai influencer",
        img:bellie
    },
    {
        id:3,
        name: "helen",
        nameTag: "Ai influencer",
        img:helen
    },
    {
        id:4,
        name: "keira",
        nameTag: "Ai influencer",
        img:keira
    },
    {
        id:5,
        name: "lilly",
        nameTag: "Ai influencer",
        img:lilly
    },
]


  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  >
        
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

export default TrendingSlides

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:30
  },
  cardWrapper:{
    flexWrap:"wrap",
    gap:20,
    flexDirection:"row",
    justifyContent:"center",
    paddingVertical:40,
    alignItems:"center"
  },
  cardWrapper:{
    flexWrap:"wrap",
    gap:20,
    flexDirection:"row",
    justifyContent:"center",
    paddingVertical:40,
    alignItems:"center"
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
    zIndex:20


  },
  cardName: {
    color: "white",
    fontWeight: "600",
    fontSize: 16
  },
  cardTag: {
    color: "white",
  },
  images:{
    width: 164,
    height: 218,
    borderRadius: 30,
  },
  blackShade:{
    width: 164,
    height: 218,
    position:"absolute",
    zIndex:10,
    backgroundColor:"black",
    borderRadius:30,
    opacity:0.3
  }
})
