import { View, StyleSheet, Text,} from 'react-native';
import React, { useContext } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import SegmentedTabs from '../../Components/Home/SegmentedTabs';
import Footer from '../../Components/Home/Footer';
import Parallax from '../../Components/Home/Parallax';
import { ThemeContext } from '../../DarkMode/ThemeContext';
import LottieView from 'lottie-react-native';

const Home = () => {
  
const { theme,} = useContext(ThemeContext);


  return (
    <View style={[styles.container,{backgroundColor:theme.bgColor}]}>

      {/*  top bar */}
      
      <View style={styles.topbar}>
        <Text style={[styles.topbarText , { color: theme.white }]}>Alforia</Text>
        
              <LottieView
            source={theme.bgColor === '#f8f8ff' ? require('../../assets/animations/coinlight.json'): require('../../assets/animations/coindark.json') }
            autoPlay
            loop={true}
            style={styles.lottie}
          />
        
        
      </View>
      <ScrollView vertical={true} showsVerticalScrollIndicator={false} >
        <View>
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
  },
  lottie: {
    width: 50,
    height: 50,
    backgroundColor:"red"
  },


})