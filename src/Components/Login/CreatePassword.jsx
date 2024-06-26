import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import { ThemeContext } from '../../DarkMode/ThemeContext';
import backIcon from "../../assets/Icons/backicon.png"

const CreatePassword = ({ switchToPasswordChanged, switchToForgotPassword }) => {

    // state for setting themes

    const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext);

    // states for form validation

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
        <View style={[styles.container, { backgroundColor: theme.themeColor }]}>
            <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.topbar}>
                <TouchableOpacity onPress={switchToForgotPassword} >
                    <View style={[styles.backBtn, { borderColor: theme.inputBar, backgroundColor: theme.inputBar }]}>
                        <Image source={backIcon} style={styles.backIcon} />
                    </View>
                </TouchableOpacity>
            </View>

            {/* wrapper */}

                <View style={styles.wrapper}>

                     {/* create password notes */}

                    <View >
                        <Text style={[styles.note, { color: theme.white }]}>Create new password</Text>
                    </View>
                    <View >
                        <Text style={[styles.para, { color: theme.white }]}>Your new password must be unique from those previously used.</Text>
                    </View>

                    {/*password inputs */}

                    <View style={styles.inputs}>
                        <TextInput
                            style={[styles.textInput, { backgroundColor: theme.inputBar, borderColor: theme.inputBar }]}
                            placeholder="New Password"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>
                    <View style={styles.inputs}>
                        <TextInput
                            style={[styles.textInput, { backgroundColor: theme.inputBar, borderColor: theme.inputBar }]}
                            placeholder="Confirm Password"
                            secureTextEntry={true}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                    </View>
                    {error ? <Text style={styles.errorText}>{error}</Text> : null}

                    {/* reset password button */}

                    <TouchableOpacity style={styles.btnContainer} onPress={handleResetPassword}>
                        <LinearGradient colors={theme.gradient} style={styles.btnGradient}>
                            <Text style={[styles.btnText, { color: theme.constWhite }]}>Reset Password</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

    )
}

export default CreatePassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    topbar:{
        padding:20,
        alignItems:"flex-start"
    },
    backBtn: {
        height: 50,
        width: 50,
        borderWidth: 0.5,
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
    },
    note: {
        fontSize: 45,
        fontWeight: "600",
        alignItems: "flex-start",
    },
    para: {
        fontSize: 16,
    },
    inputs: {
        gap: 12,

    },
    textInput: {
        height: 56,
        borderRadius: 8,
        borderWidth: 1,
        paddingLeft: 8,
        fontSize: 20,
        elevation: 6
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
})