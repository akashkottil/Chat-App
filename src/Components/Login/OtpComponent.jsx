import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, { useState, useContext } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import { OtpInput } from 'react-native-otp-entry'
import { ThemeContext } from '../../DarkMode/ThemeContext';



import backIcon from "../../assets/Icons/backicon.png"
import colorTheme from '../../DarkMode/darkMode';
const OtpComponent = ({ switchToCreatePassword, switchToForgotPassword }) => {

    const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext);
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');

    // Validation function to check if OTP is correctly filled
    const validateOtp = () => {
        if (otp.length <= 3) {
            setError('Please fill all 4 digits of the OTP');
            return false;
        }
        setError('');
        return true;
    };

    const handleVerify = () => {
        // if (validateOtp()) {
            console.log('OTP is valid');
            switchToCreatePassword();
        // }
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.themeColor }]}>
            {/* <View style={styles.topbar}>

    </View> */}
            <View style={styles.wrapper}>
                <TouchableOpacity onPress={switchToForgotPassword}>
                    <View style={[styles.backBtn, { backgroundColor: theme.inputBar, borderColor: theme.inputBar }]}>
                        <Image source={backIcon} style={styles.backIcon} />
                    </View>
                </TouchableOpacity>
                <View >
                    <Text style={[styles.note, { color: theme.white }]}>OTP Verification</Text>
                </View>
                <View >
                    <Text style={[styles.para, { color: theme.white }]}>Enter the verification code we just sent on your email address.</Text>
                </View>


                <OtpInput
                    numberOfDigits={4}
                    focusColor={colorTheme.footerText}
                    focusStickBlinkingDuration={400}
                    containerStyle={[styles.otpContainer, ]}
                    inputsContainerStyle={[styles.otpInputContainer, ]}
                    inputStyle={[styles.otpInput, ]
                    }
                    onChange={setOtp}
                />
                {error ? <Text style={styles.errorText}>{error}</Text> : null}


                <TouchableOpacity style={styles.btnContainer} onPress={handleVerify}>
                    <LinearGradient colors={colorTheme.gradient} style={styles.btnGradient}>
                        <Text style={[styles.btnText, { color: theme.constWhite }]}>Verify</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <View >
                    <Text style={[styles.qstn, { color: theme.white }]}>Didn’t received code? Resend</Text>
                </View>
            </View>
        </View>
    )
}

export default OtpComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        // backgroundColor: colorTheme.themeColor,
    },
    backBtn: {
        height: 50,
        width: 50,
        borderWidth: 0.5,
        // borderColor: colorTheme.inputBar,
        // backgroundColor: colorTheme.inputBar,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        elevation: 10
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
        // color: colorTheme.white
    },
    para: {
        fontSize: 16,
        // color: colorTheme.white
    },

    // otpContainer: {

    //     width: '100%', // Adjust the width
    //     height: 56, // Adjust the height
    //   },
    //   otpInputContainer: {

    //     height: 56, // Adjust the height of each input
    //     width: 50, // Adjust the width of each input
    //     margin: 5, // Adjust the margin between inputs
    //     borderRadius: 8, // Adjust the border radius if needed
    //   },
    //   otpInput: {
    //     fontSize: 50, // Adjust the font size
    //     textAlign: 'center', // Center align the text,
    //     backgroundColor: colorTheme.footerText, // Adjust the background color of each input
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
        // color: colorTheme.white,
        fontWeight: "600"
    },
    qstn: {
        alignSelf: "center",
        fontSize: 15,
        color: colorTheme.white
    },

})