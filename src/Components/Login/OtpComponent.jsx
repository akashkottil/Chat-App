import { StyleSheet, Text, View, Image,TextInput} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../../Constants/Colors'
import { OtpInput } from 'react-native-otp-entry'



import backIcon from "../../assets/Icons/backicon.png"
const OtpComponent = ({navigation}) => {
    const handleBack= ()=>{
        navigation.navigate('login')
    }
  return (
    <View style={styles.container}>
            {/* <View style={styles.topbar}>

    </View> */}
            <View style={styles.wrapper}>
                <TouchableOpacity onPress={handleBack}>
                    <View style={styles.backBtn}>
                        <Image source={backIcon} style={styles.backIcon} />
                    </View>
                </TouchableOpacity>
                <View >
                    <Text style={styles.note}>OTP Verification</Text>
                </View>
                <View >
                    <Text style={styles.para}>Enter the verification code we just sent on your email address.</Text>
                </View>
               

                <OtpInput
                numberOfDigits={4}
                focusColor={Colors.solid}
                focusStickBlinkingDuration={400}
                containerStyle={styles.otpContainer}
                inputsContainerStyle={styles.otpInputContainer}
                inputStyle={styles.otpInput}
                />

                
                <TouchableOpacity style={styles.btnContainer}>
                    <LinearGradient colors={Colors.gradient} style={styles.btnGradient}>
                        <Text style={styles.btnText}>Send Code</Text>
                    </LinearGradient>
                </TouchableOpacity>
                
                <View >
                    <Text style={styles.qstn}>Didn’t received code? Resend</Text>
                </View>
            </View>
        </View>
  )
}

export default OtpComponent

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
        justifyContent: "flex-start"
        // justifyContent: "center",
        // alignItems:"center"
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

    // otpContainer: {
    //     backgroundColor: '#F7F8F9', // Adjust the background color
    //     width: '100%', // Adjust the width
    //     height: 56, // Adjust the height
    //   },
    //   otpInputContainer: {
    //     backgroundColor: '#F7F8F9', // Adjust the background color of each input
    //     height: 56, // Adjust the height of each input
    //     width: 50, // Adjust the width of each input
    //     margin: 5, // Adjust the margin between inputs
    //     borderRadius: 8, // Adjust the border radius if needed
    //   },
    //   otpInput: {
    //     fontSize: 50, // Adjust the font size
    //     textAlign: 'center', // Center align the text,
    //     backgroundColor: '#F7F8F9', // Adjust the background color of each input
    //   },

    btnContainer: {
        // width:250,

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

})