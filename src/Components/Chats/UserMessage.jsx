import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const UserMessage = () => {

  return (
    <View style={styles.container}>
      <View style={styles.messageBox}>
        <Text style={styles.messageText}>Let's get lunch. How about pizza?</Text>
      </View>
    </View>
  )
}

export default UserMessage

const styles = StyleSheet.create({
    container:{
        alignItems:"flex-end",
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
    elevation: 4,
    },
    messageText:{
        fontSize:17,
        fontWeight:"400",
        color:"black"
    },
    
})