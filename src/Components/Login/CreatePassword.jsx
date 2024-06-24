import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import { ThemeContext } from '../../DarkMode/ThemeContext';
import backIcon from "../../assets/Icons/backicon.png"
import colorTheme from '../../DarkMode/darkMode';
const CreatePassword = ({ switchToPasswordChanged, switchToForgotPassword }) => {

    const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const validatePasswords = () => {
        if (!password || !confirmPassword) {
            setError('Both fields are required');
            return false;
        } else if (password !== confirmPassword) {
            setError('Passwords do not match');
            return false;
        } else if (password.length < 6) {  // Example of adding a minimum length requirement
            setError('Password must be at least 6 characters');
            return false;
        }
        setError('');
        return true;
    };

    const handleResetPassword = () => {
        if (validatePasswords()) {
            console.log('Password is valid and reset');
            switchToPasswordChanged();  // Proceed to password changed confirmation
        }
    };

    return (
        <View style={[styles.container, {backgroundColor: theme.themeColor}]}>
            {/* <View style={styles.topbar}>

    </View> */}
            <View style={styles.wrapper}>
                <TouchableOpacity onPress={switchToForgotPassword} >
                    <View style={[styles.backBtn, {borderColor: theme.inputBar, backgroundColor: theme.inputBar }]}>
                        <Image source={backIcon} style={styles.backIcon} />
                    </View>
                </TouchableOpacity>
                <View >
                    <Text style={[styles.note, {color: theme.white}]}>Create new password</Text>
                </View>
                <View >
                    <Text style={[styles.para,{color: theme.white}]}>Your new password must be unique from those previously used.</Text>
                </View>
                <View style={styles.inputs}>
                    <TextInput
                        style={[styles.textInput, {backgroundColor: theme.inputBar, borderColor:theme.inputBar}]}
                        placeholder="New Password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <View style={styles.inputs}>
                    <TextInput
                        style={[styles.textInput, {backgroundColor: theme.inputBar, borderColor:theme.inputBar}]}
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                </View>
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
                <TouchableOpacity style={styles.btnContainer} onPress={handleResetPassword}>
                    <LinearGradient colors={colorTheme.gradient} style={styles.btnGradient}>
                        <Text style={[styles.btnText, {color: theme.constWhite}]}>Reset Password</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default CreatePassword

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
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: colorTheme.inputBar,
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
        gap: 12,
        
    },
    textInput: {
        height: 56,
        borderRadius: 8,
        // borderColor: colorTheme.inputBar,
        // backgroundColor: colorTheme.inputBar,
        borderWidth: 1,
        paddingLeft: 8,
        fontSize: 20,
        elevation:6
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

})