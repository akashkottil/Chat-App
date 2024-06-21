import { View, StyleSheet, Text, Image, useColorScheme } from 'react-native';
import React  from 'react'
import searchIcon from '../../assets/Icons/search.png'
import TrendingSlides from '../../Components/Home/TrendingSlides';
import LinearGradient from 'react-native-linear-gradient';

import { ScrollView } from 'react-native-gesture-handler';
import SegmentedTabs from '../../Components/Home/SegmentedTabs';
import Footer from '../../Components/Home/Footer';
import Parallax from '../../Components/Home/Parallax';

import { useTheme } from '@react-navigation/native';
import colorTheme from '../../DarkMode/darkMode';

const Home = () => {
  
const colors = useTheme().colors



  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Text style={styles.topbarText}>Alforia</Text>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={colorTheme.gradient} style={styles.searchBox}>
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
    backgroundColor: colorTheme.bgColor,
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
  topbarText:{
    fontSize:25,
    
  }

})