import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import users from '../../../assets/Influencers/Influencers'
import { windowWidth,windowHeight } from '../../../Constants/Dimension'

const Verified = () => {

    const navigation = useNavigation();

    // function for navigate

    const handleProfileClick = (profile) =>{
      navigation.navigate('personalChat',{userId: profile.id, userName: profile.name, userImage: profile.img,userMessage: profile.messages})
    }

  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>

{
  users.map((user) => (
    <TouchableOpacity key={user.id} onPress={()=>handleProfileClick(user)}>

      {/* card */}

    <View style={styles.card}>
      <View>
        <Image source={user.img} style={styles.images} />
        <View style={styles.blackShade}></View>

        {/* card details / name */}

        <View style={styles.cardDetails}>
          <View style={styles.text}>
            <Text style={styles.cardName}>{user.name}</Text>
            <Text style={styles.cardTag}>{user.nameTag}</Text>
          </View>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  ))
}


<View></View>
</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1
  },
  cardWrapper: {
      flexWrap: "wrap",
      gap:windowWidth*0.05,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: windowWidth*0.05
      
    },
    card: {
      width: windowWidth*0.39,
      height: windowHeight*0.26,
      borderRadius: windowWidth*0.07,
      position: "relative",
      backgroundColor:"red"
    },
    cardDetails: {
      position: "absolute",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      zIndex: 20,
      bottom:windowHeight*0.02,
      left:windowWidth*0.04
    },
    cardName: {
      color: "white",
      fontWeight: "600",
      fontSize: windowWidth*0.05
    },
    cardTag: {
      color: "white",
      fontSize:windowWidth*0.04
    },
    images: {
      width: windowWidth*0.39,
      height: windowHeight*0.26,
      borderRadius: windowWidth*0.07,
    },
    blackShade: {
      width: windowWidth*0.39,
      height: windowHeight*0.26,
      position: "absolute",
      zIndex: 10,
      backgroundColor: "black",
      borderRadius: windowWidth*0.07,
      opacity: 0.3
    },
})

export default Verified
