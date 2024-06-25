import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React, { useState, useContext } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import { ThemeContext } from '../../DarkMode/ThemeContext';
import { useNavigation } from '@react-navigation/native'
import colorTheme from '../../DarkMode/darkMode';

// importing Icons

import appleIcons from '../../assets/Icons/apple.png'
import googleIcons from '../../assets/Icons/google.png'
import fbIcons from '../../assets/Icons/fb.png'
import backIcon from "../../assets/Icons/backicon.png"

const SignupComponent = ({ switchToLogin, }) => {

    // state for setting themes

    const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext);

    // navigation state

    const navigation = useNavigation();

    // function for login button

    const handleLogin = () => {
        navigation.navigate('login')
    }

    // states for form validation

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};
        let isValid = true;

        // Username validation
        if (!username.trim()) {
            newErrors.username = 'Username is required';
            isValid = false;
        }

        // Email validation
        if (!email) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
            isValid = false;
        }

        // Password validation
        if (!password) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
            isValid = false;
        }

        // Confirm password validation
        if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };
    const handleRegister = () => {
        if (validateForm()) {
            console.log('Form is valid, proceed with registration...');
            switchToLogin(); // Assuming this is the navigation or state change method after registration
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.themeColor }]}>

            {/* top bar with back navigation button */}

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.topbar}>
                    <TouchableOpacity style={[styles.backBtn, { backgroundColor: theme.inputBar, borderColor: colorTheme.inputBar }]} onPress={switchToLogin}>
                        <View >
                            <Image source={backIcon} style={styles.backIcon} />
                        </View>
                    </TouchableOpacity>
                </View>

                {/* wrapper */}

                <View style={styles.wrapper}>

                    {/* Register notes */}

                    <View >
                        <Text style={[styles.note, { color: theme.white }]}>Hello! Register to get started</Text>
                    </View>

                    {/* register inputs */}

                    <View style={styles.inputs}>
                        <TextInput
                            style={[styles.textInput, { borderColor: theme.inputBar, backgroundColor: theme.inputBar }]}
                            placeholder="Username"
                            value={username}
                            onChangeText={setUsername}
                        />
                        {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}

                        <TextInput
                            style={[styles.textInput, { borderColor: theme.inputBar, backgroundColor: theme.inputBar }]}
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                        />
                        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

                        <TextInput
                            style={[styles.textInput, { borderColor: theme.inputBar, backgroundColor: theme.inputBar }]}
                            placeholder="Password"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

                        <TextInput
                            style={[styles.textInput, { borderColor: theme.inputBar, backgroundColor: theme.inputBar }]}
                            placeholder="Confirm Password"
                            secureTextEntry
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                        {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
                    </View>

                    {/* Register button */}

                    <TouchableOpacity style={styles.btnContainer} onPress={handleRegister}>
                        <LinearGradient colors={colorTheme.gradient} style={styles.btnGradient}>
                            <Text style={[styles.btnText, { color: theme.constWhite }]}>Register</Text>
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

                    {/* Login now button */}

                    <View >
                        <Text style={[styles.qstn, { color: theme.white }]} onPress={switchToLogin}>Already have an account? Login Now</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default SignupComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topbar: {
        justifyContent: "flex-start",
        paddingHorizontal: 20,
        paddingVertical: 20
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
        justifyContent: "space-around"
    },
    note: {
        fontSize: 45,
        fontWeight: "600",
        alignItems: "flex-start",
    },
    inputs: {
        gap: 12
    },
    textInput: {
        height: 56,
        borderRadius: 8,
        borderWidth: 1,
        paddingLeft: 8,
        fontSize: 20,
        elevation: 6
    },
    forgotPswrdBox: {
        alignItems: "flex-end"
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
        borderColor: "#E8ECF4",
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