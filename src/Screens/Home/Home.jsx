import { View, StyleSheet, Text, Image } from 'react-native';
import React  from 'react'
import searchIcon from '../../assets/Icons/search.png'
import TrendingSlides from '../../Components/Home/TrendingSlides';

import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../Constants/Colors';

import { ScrollView } from 'react-native-gesture-handler';
import SegmentedTabs from '../../Components/Home/SegmentedTabs';
import Footer from '../../Components/Home/Footer';
import Parallax from '../../Components/Home/Parallax';


const Home = () => {
  



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
          {/* <TrendingSlides /> */}
          <Parallax/>
        </View>
        <View>
          <SegmentedTabs/>
          
        </View>
        <Footer/>
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
    // fontWeight:"600",
    color:"black",
    
  }

})