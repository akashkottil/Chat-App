import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

const AiMessage = () => {
  return (
    <View style={styles.container}>
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#522FDC','#9673FF']} style={styles.messageBox}>
        <Text style={styles.messageText}>Let's get lunch. How about pizza?</Text>
      </LinearGradient>
    </View>
  )
}

export default AiMessage

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:15,
        paddingVertical:15
    },

    messageBox:{
        width:243,
        backgroundColor:"#F2F2F2",
        paddingVertical:15,
        paddingHorizontal:15,
        borderRadius:20,
        shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 4,
    },
    messageText:{
        fontSize:17,
        fontWeight:"400",
        color:"white"
    }
})