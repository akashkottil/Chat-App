import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '../../Constants/Colors'
import LinearGradient from 'react-native-linear-gradient'

// icons

import appleIcons from '../../assets/Icons/apple.png'
import googleIcons from '../../assets/Icons/google.png'
import fbIcons from '../../assets/Icons/fb.png'
import backIcon from "../../assets/Icons/backicon.png"


const SignupComponent = ({switchToLogin, }) => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.topbar}>

    </View> */}
            <View style={styles.wrapper}>
                <TouchableOpacity >
                <View style={styles.backBtn}>
                    <Image source={backIcon} style={styles.backIcon} />
                </View>
                </TouchableOpacity>
                <View >
                    <Text style={styles.note}>Hello! Register to get started</Text>
                </View>
                <View style={styles.inputs}>
                    <TextInput style={styles.textInput} placeholder="Username" />
                    <TextInput style={styles.textInput} placeholder="Email" />
                    <TextInput style={styles.textInput} placeholder="Password" secureTextEntry />
                    <TextInput style={styles.textInput} placeholder="Confirm Password" secureTextEntry />
                    <TouchableOpacity style={styles.forgotPswrdBox}>
                        <Text style={styles.forgotPswrd}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btnContainer}>
                    <LinearGradient colors={Colors.gradient} style={styles.btnGradient}>
                        <Text style={styles.btnText}>Register</Text>
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
                    <Text style={styles.qstn} onPress={switchToLogin}>Already have an account? Login Now</Text>
                </View>
            </View>
        </View>
    )
}

export default SignupComponent

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
        justifyContent:"center",
        alignItems:"center"
    },
    backIcon:{
        height:19,
        width:19
    },
    wrapper: {
        flex: 12,
        backgroundColor: "white",
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
        color: "black"
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
    forgotPswrdBox: {
        alignItems: "flex-end"
    },
    forgotPswrd: {
        fontSize: 14,
        color: "#6A707C"
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
        color: Colors.white,
        fontWeight: "600"
    },
    line: {
        height: 1,
        flex: 1,
        backgroundColor: "gray"
    },

    loginWithContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    orLoginText: {
        fontSize: 14
    },
    socialLoginContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    socialButton: {
        borderColor: "#E8ECF4",
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
        color: "black"
    },
    socialIcon: {
        height: 26,
        width: 26
    }

})