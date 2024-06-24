import { View, StyleSheet, Text, Image, useColorScheme } from 'react-native';
import React, { useContext } from 'react';
import searchIcon from '../../assets/Icons/search.png'
import TrendingSlides from '../../Components/Home/TrendingSlides';
import LinearGradient from 'react-native-linear-gradient';

import { ScrollView } from 'react-native-gesture-handler';
import SegmentedTabs from '../../Components/Home/SegmentedTabs';
import Footer from '../../Components/Home/Footer';
import Parallax from '../../Components/Home/Parallax';

import { useTheme } from '@react-navigation/native';
import { ThemeContext } from '../../DarkMode/ThemeContext';

const Home = () => {
  
const colors = useTheme().colors
const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext);


  return (
    <View style={[styles.container,{backgroundColor:theme.bgColor}]}>
      <View style={styles.topbar}>
        <Text style={[styles.topbarText , { color: theme.white }]}>Alforia</Text>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={theme.gradient} style={styles.searchBox}>
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
    // backgroundColor: colorTheme.bgColor,
  },
  topbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,

  },
  searchIcon: {
    height: 22,
    width: 26
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