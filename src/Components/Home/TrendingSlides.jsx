import { Button, View, StyleSheet, Text, Image } from 'react-native';
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

// influencers images

import users from '../../assets/Influencers/Influencers';


const TrendingSlides = () => {



  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  >
        
      <View style={styles.cardWrapper}>

{

  users.map((user) => (
    <View style={styles.card}>
      <View>
        <Image source={user.img} style={styles.images} />
        <View style={styles.blackShade}></View>
        <View style={styles.cardDetails}>
          <View style={styles.text}>
            <Text style={styles.cardName}>{user.name}</Text>
            <Text style={styles.cardTag}>{user.nameTag}</Text>
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
