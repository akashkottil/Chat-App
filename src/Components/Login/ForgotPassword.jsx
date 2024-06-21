import { StyleSheet, Text, View, Image,TextInput} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'

import backIcon from "../../assets/Icons/backicon.png"
import colorTheme from '../../DarkMode/darkMode'

const ForgotPassword = ({switchToOtpScreen,switchToLogin }) => {
  return (
    <View style={styles.container}>
            {/* <View style={styles.topbar}>

    </View> */}
            <View style={styles.wrapper}>
                <TouchableOpacity onPress={switchToLogin}>
                    <View style={styles.backBtn}>
                        <Image source={backIcon} style={styles.backIcon} />
                    </View>
                </TouchableOpacity>
                <View >
                    <Text style={styles.note}>Forgot Password?</Text>
                </View>
                <View >
                    <Text style={styles.para}>Don't worry! It occurs. Please enter the email address linked with your account.</Text>
                </View>
                <View style={styles.inputs}>
                    <TextInput style={styles.textInput} placeholder="Enter your Email" />
                </View>
                <TouchableOpacity style={styles.btnContainer} onPress={switchToOtpScreen}>
                    <LinearGradient colors={colorTheme.gradient} style={styles.btnGradient}>
                        <Text style={styles.btnText}>Send Code</Text>
                    </LinearGradient>
                </TouchableOpacity>
                
                <View >
                    <Text style={styles.qstn} onPress={switchToLogin}>Remember Password? Login</Text>
                </View>
            </View>
        </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: colorTheme.themeColor,
    },
    backBtn: {
        height: 50,
        width: 50,
        borderWidth: 0.5,
        borderColor: colorTheme.inputBar,
        backgroundColor: colorTheme.inputBar,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        elevation:10
    },
    backIcon: {
        height: 19,
        width: 19
    },
    wrapper: {
        flex: 12,
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
        color: colorTheme.white
    },
    para:{
        fontSize:16,
        color: colorTheme.white
    },
    inputs: {
        gap: 12
    },
    textInput: {
        height: 56,
        borderRadius: 8,
        borderColor: colorTheme.inputBar,
        backgroundColor: colorTheme.inputBar,
        borderWidth: 1,
        paddingLeft: 8,
        fontSize: 20
    },


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
        color: colorTheme.white,
        fontWeight: "600"
    },
    qstn: {
        alignSelf: "center",
        fontSize: 15,
        color: colorTheme.white,
    },

})