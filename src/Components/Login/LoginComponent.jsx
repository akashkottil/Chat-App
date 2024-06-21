import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'

// icons

import appleIcons from '../../assets/Icons/apple.png'
import googleIcons from '../../assets/Icons/google.png'
import fbIcons from '../../assets/Icons/fb.png' 

import { useNavigation } from '@react-navigation/native'
import colorTheme from '../../DarkMode/darkMode';


const LoginComponent = ({switchToSignup, switchToForgotPassword, }) => {
    const navigation = useNavigation();
    const handleLogin= ()=>{
        navigation.navigate('home')
    }
    const handleBack =()=>{
        navigation.navigate('')
    }
    return (
        <View style={styles.container}>
            {/* <View style={styles.topbar}>

            </View> */}
            <View style={styles.wrapper}>
                <View style={styles.backBtn}>
                    {/* <Image source={backIcon} style={styles.backIcon}/> */}
                </View>
                <View >
                    <Text style={styles.note}>Welcome back! Glad to see you, Again!</Text>
                </View>
                <View style={styles.inputs}>
                    <TextInput style={styles.textInput} placeholder="Enter Your Email" />
                    <TextInput style={styles.textInput} placeholder="Password" secureTextEntry />
                    <TouchableOpacity style={styles.forgotPswrdBox}>
                        <Text style={styles.forgotPswrd} onPress={switchToForgotPassword}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btnContainer} onPress={handleLogin}>
                    <LinearGradient colors={colorTheme.gradient} style={styles.btnGradient}>
                        <Text style={styles.btnText}>Login</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <View style={styles.loginWithContainer}>
                    <View style={styles.line}></View>
                    <View><Text style={styles.orLoginText}>Or Login With</Text></View>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.socialLoginContainer}>
                    <View style={styles.socialButton}>
                        <Image source={fbIcons} style={styles.socialIcon} />
                    </View>
                    <View style={styles.socialButton}>
                        <Image source={googleIcons} style={styles.socialIcon} />
                    </View>
                    <View style={styles.socialButton}>
                        <Image source={appleIcons} style={styles.socialIcon} />
                    </View>
                </View>
                <View >
                    <Text style={styles.qstn} onPress={switchToSignup}>Don't have an account? Register Now</Text>
                </View>
            </View>
        </View>
    )
}

export default LoginComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: colorTheme.themeColor,
    },

    backIcon:{
        height:19,
        width:19
    },
    wrapper: {
        flex: 12,
        alignSelf: "stretch",
        paddingHorizontal: 20,
        gap: 30,
        paddingVertical: 15,
        justifyContent: "space-around"
        // justifyContent: "center",
        // alignItems:"center"
    },
    note: {
        fontSize: 45,
        fontWeight: "600",
        alignItems: "flex-start",
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
    forgotPswrdBox: {
        alignItems: "flex-end"
    },
    forgotPswrd: {
        fontSize: 14,
        color: colorTheme.white,
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
    line: {
        height: 1,
        flex: 1,
        backgroundColor: colorTheme.white,
    },

    loginWithContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    orLoginText: {
        fontSize: 14,
        color: colorTheme.white,
    },
    socialLoginContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    socialButton: {
        borderColor: colorTheme.inputBar,
        backgroundColor:colorTheme.inputBar,
        borderWidth: 1,
        width: 105,
        height: 56,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    qstn: {
        alignSelf: "center",
        fontSize: 15,
        color: colorTheme.white,
    },
    socialIcon: {
        height: 26,
        width: 26
    }

})
