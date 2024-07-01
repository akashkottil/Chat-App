import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React, { useContext } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import { ThemeContext } from '../../DarkMode/ThemeContext';
import { useNavigation } from '@react-navigation/native'

// importing Icons

import appleIcons from '../../assets/Icons/apple.png'
import googleIcons from '../../assets/Icons/google.png'
import fbIcons from '../../assets/Icons/fb.png'
import { windowHeight, windowWidth } from '../../Constants/Dimension';

const LoginComponent = ({ switchToSignup,navigation, switchToForgotPassword, }) => {

    // state for setting themes

    const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext);

    // navigation state


    // function for login button

    const handleLogin = () => {
        navigation.navigate('home')
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.themeColor }]}>
            
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.wrapper}>
                    
                    {/* Welcome Note */}

                    <View >
                        <Text style={[styles.note, { color: theme.white }]}>Welcome back! Glad to see you, Again!</Text>
                    </View>

                    {/* Login Inputs */}

                    <View style={styles.inputs}>
                        <TextInput style={[styles.textInput, { backgroundColor: theme.inputBar, borderColor: theme.inputBar }]} placeholder="Enter Your Email" />
                        <TextInput style={[styles.textInput, { backgroundColor: theme.inputBar, borderColor: theme.inputBar }]} placeholder="Password" secureTextEntry />

                        {/* forgot password */}

                        <TouchableOpacity style={styles.forgotPswrdBox}>
                            <Text style={[styles.forgotPswrd, { color: theme.white }]} onPress={switchToForgotPassword}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Login button */}

                    <TouchableOpacity style={styles.btnContainer} onPress={()=>navigation.navigate('home')}>
                        <LinearGradient colors={theme.gradient} style={styles.btnGradient}>
                            <Text style={[styles.btnText, { color: theme.constWhite }]}>Login</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    
                    <View style={styles.loginWithContainer}>
                        <View style={[styles.line, { backgroundColor: theme.white }]}></View>
                        <View><Text style={[styles.orLoginText, { color: theme.white }]}>Or Login With</Text></View>
                        <View style={[styles.line, { backgroundColor: theme.white }]}></View>
                    </View>

                    {/* Social media login buttons */}

                    <View style={styles.socialLoginContainer}>
                        <View style={[styles.socialButton, { backgroundColor: theme.cards, borderColor: theme.cards }]}>
                            <Image source={fbIcons} style={styles.socialIcon} />
                        </View>
                        <View style={[styles.socialButton, { backgroundColor: theme.cards, borderColor: theme.cards }]}>
                            <Image source={googleIcons} style={styles.socialIcon} />
                        </View>
                        <View style={[styles.socialButton, { backgroundColor: theme.cards, borderColor: theme.cards }]}>
                            <Image source={appleIcons} style={styles.socialIcon} />
                        </View>
                    </View>

                    {/* Register now button */}

                    <View >
                        <Text style={[styles.qstn, { color: theme.white }]} onPress={switchToSignup}>Don't have an account? Register Now</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default LoginComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent:"center"
    },

    backIcon: {
        height: 19,
        width: 19
    },
    wrapper: {
        flex: 12,
        alignSelf: "stretch",
        paddingHorizontal: 10,
        gap: 30,
        paddingVertical: 15,
        justifyContent: "space-around"
    },
    note: {
        fontSize: 45,
        fontWeight: "600",
        alignItems: "flex-start",
        fontFamily:"PlaywriteESDeco-ExtraLight"
    },
    inputs: {
        gap: 12,

    },
    textInput: {
        height: windowHeight *0.07,
        borderRadius: 8,
        borderWidth: 1,
        paddingLeft: 8,
        fontSize: 20,
        elevation: 6
    },
    forgotPswrdBox: {
        alignItems: "flex-end"
    },
    forgotPswrd: {
        fontSize: 14,
    },
    btnContainer: {
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
        fontWeight: "600"
    },
    line: {
        height: 1,
        flex: 1,
    },

    loginWithContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    orLoginText: {
        fontSize: 14,
    },
    socialLoginContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    socialButton: {
        borderWidth: 1,
        width: 105,
        height: 56,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        elevation: 6
    },
    qstn: {
        alignSelf: "center",
        fontSize: 15,
    },
    socialIcon: {
        height: 26,
        width: 26
    }
})