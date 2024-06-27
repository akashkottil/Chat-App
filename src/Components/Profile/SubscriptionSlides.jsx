import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import users from '../../assets/Influencers/Influencers'
import { ScrollView } from 'react-native-gesture-handler'

const {width} = Dimensions.get('window');
const SubscriptionSlides = () => {
  return (
    <View style={styles.container}>
        
        <ScrollView horizontal={true}>
      {
        users.map((user, index)=>(
            <Image source={user.img} style={[styles.images]}/>
        ))
      }
      </ScrollView>
    </View>
  )
}

export default SubscriptionSlides

const styles = StyleSheet.create({
	container: {
        flex:1,
        alignSelf:'stretch',
    },
    images:{
        width: width,
        height: "100%"
    },
    

});