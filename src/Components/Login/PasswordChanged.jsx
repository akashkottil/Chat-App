import { StyleSheet, Text, View, Image,TextInput} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../../Constants/Colors'
import LottieView from 'lottie-react-native';

import { useNavigation } from '@react-navigation/native'

const PasswordChanged = ({switchToLogin}) => {
    const navigation = useNavigation();

    const handleLogin = ()=>{
        navigation.navigate('login')
    }
  return (
    <View style={styles.container}>
    {/* <View style={styles.topbar}>

</View> */}
    <View style={styles.wrapper}>
    <View style={styles.lottieContainer}>
          <LottieView
            source={require('../../assets/animations/success.json')}
            autoPlay
            loop={false}
            style={styles.lottie}
          />
          
        </View>
        <View >
            <Text style={styles.note}>Password Changed!</Text>
        </View>
        <View >
            <Text style={styles.para}>Your password has been changed successfully.</Text>
        </View>
        
        <TouchableOpacity style={styles.btnContainer} onPress={handleLogin}>
            <LinearGradient colors={Colors.gradient} style={styles.btnGradient}>
                <Text style={styles.btnText} onPress={switchToLogin}>Back to Login</Text>
            </LinearGradient>
        </TouchableOpacity>
    </View>
</View>
  )
}

export default PasswordChanged

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    backBtn: {
        height: 50,
        width: 50,
        borderWidth: 0.5,
        borderColor: '##E8ECF4',
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    backIcon: {
        height: 19,
        width: 19
    },
    wrapper: {
        flex: 12,
        backgroundColor: "white",
        alignSelf: "stretch",
        paddingHorizontal: 20,
        gap: 30,
        paddingVertical: 15,
        justifyContent: "center",
        // justifyContent: "center",
        alignItems:"center"
    },
    note: {
        fontSize: 45,
        fontWeight: "600",
        alignItems: "flex-start",
        color: "black"
    },
    para:{
        fontSize:16
    },
    inputs: {
        gap: 12
    },
    textInput: {
        height: 56,
        borderRadius: 8,
        borderColor: '#E8ECF4',
        backgroundColor: '#F7F8F9',
        borderWidth: 1,
        paddingLeft: 8,
        fontSize: 20
    },


    btnContainer: {
        width:300,
        

    },
    btnGradient: {
        alignContent: "center",
        alignItems: "center",
        height: 56,
        justifyContent: "center",
        borderRadius: 10
    },
    btnText: {
        fontSize: 15,
        color: Colors.white,
        fontWeight: "600"
    },
    qstn: {
        alignSelf: "center",
        fontSize: 15,
        color: "black"
    },
    lottieContainer: {
        width: '100%',
        alignItems: 'center',
      },
      lottie: {
        width: 200,
        height: 200,
      },

})