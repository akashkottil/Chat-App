import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, { useState, useContext } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import { ThemeContext } from '../../DarkMode/ThemeContext';
import backIcon from "../../assets/Icons/backicon.png"
import colorTheme from '../../DarkMode/darkMode'

const ForgotPassword = ({ switchToOtpScreen, switchToLogin }) => {
    const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext);

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const validateEmail = () => {
        const emailRegex = /\S+@\S+\.\S+/;
        if (!email) {
            setError('Email address is required');
            return false;
        } else if (!emailRegex.test(email)) {
            setError('Please enter a valid email address');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = () => {
        if (validateEmail()) {
            switchToOtpScreen();
            // Further actions upon successful validation
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.themeColor }]}>
            {/* <View style={styles.topbar}>

    </View> */}
            <View style={styles.wrapper}>
                <TouchableOpacity onPress={switchToLogin}>
                    <View style={[styles.backBtn, { backgroundColor: theme.inputBar, borderBlockColor: theme.inputBar }]}>
                        <Image source={backIcon} style={styles.backIcon} />
                    </View>
                </TouchableOpacity>
                <View >
                    <Text style={[styles.note, { color: theme.white }]}>Forgot Password?</Text>
                </View>
                <View >
                    <Text style={[styles.para, { color: theme.white }]}>Don't worry! It occurs. Please enter the email address linked with your account.</Text>
                </View>
                <View style={[styles.inputs, { backgroundColor: theme.inputBar, borderColor: theme.inputBar }]}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your Email"
                        value={email}
                        onChangeText={setEmail}
                        onBlur={validateEmail} // Validate on input loss of focus (optional)
                    />
                    {error ? <Text style={styles.errorText}>{error}</Text> : null}
                </View>
                <TouchableOpacity style={styles.btnContainer} onPress={handleSubmit}>
                    <LinearGradient colors={colorTheme.gradient} style={styles.btnGradient}>
                        <Text style={[styles.btnText, { color: theme.constWhite }]}>Send Code</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <View >
                    <Text style={[styles.qstn, { color: theme.white }]} onPress={switchToLogin}>Remember Password? Login</Text>
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
        // backgroundColor: colorTheme.themeColor,
    },
    backBtn: {
        height: 50,
        width: 50,
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
    inputs: {
        borderRadius: 8,
        gap: 12,
        elevation: 6
    },
    textInput: {
        height: 56,
        // borderColor: colorTheme.inputBar,
        // backgroundColor: colorTheme.inputBar,
        // borderWidth: 1,
        paddingLeft: 8,
        fontSize: 20,

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
        // color: colorTheme.white,
        fontWeight: "600"
    },
    qstn: {
        alignSelf: "center",
        fontSize: 15,
        // color: colorTheme.white,b
    },

})