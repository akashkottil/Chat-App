import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LoginComponent from '../../Components/Login/LoginComponent'
import SignupComponent from '../../Components/Login/SignupComponent'
import ForgotPassword from '../../Components/Login/ForgotPassword'
import OtpComponent from '../../Components/Login/OtpComponent'
import CreatePassword from '../../Components/Login/CreatePassword'
import PasswordChanged from '../../Components/Login/PasswordChanged'


const Login = () => {

    const [CurrentScreen, setCurrentScreen] = useState('login');

    // Navigate to signup component

    const  switchToSignup =() =>{
        setCurrentScreen('signup');
    }

    // Navigate to login component
    
    const switchToLogin =()=>{
        setCurrentScreen('login');
    }

    // Navigate to forgotpassword component

    const switchToForgotPassword =()=>{
        setCurrentScreen('forgotpassword');
    }

    // Navigate to otpscreen component

    const switchToOtpScreen =()=>{
        setCurrentScreen('otpscreen')
    }

    // Navigate to createpassword component

    const switchToCreatePassword =()=>{
        setCurrentScreen('createpassword')
    }

    // Navigate to passwordchanged component

    const switchToPasswordChanged =()=>{
        setCurrentScreen('passwordchanged')
    }
  return (
    <View style={styles.container}>
        

        {
            CurrentScreen === 'login' && (
                <LoginComponent switchToSignup={switchToSignup} switchToForgotPassword={switchToForgotPassword} />
            )
        }
        {
            CurrentScreen === 'signup' && (
                <SignupComponent switchToLogin={switchToLogin}/>
            )
        }
        {
            CurrentScreen === 'forgotpassword' && (
                <ForgotPassword  switchToLogin={switchToLogin} switchToOtpScreen={switchToOtpScreen}/>
            )
        }
        {
            CurrentScreen === 'otpscreen' && (
                <OtpComponent switchToCreatePassword={switchToCreatePassword} switchToForgotPassword={switchToForgotPassword}/>
            )
        }
        {
            CurrentScreen === 'createpassword' && (
                <CreatePassword switchToPasswordChanged={switchToPasswordChanged} switchToForgotPassword={switchToForgotPassword}/>
            )
        }
        {
            CurrentScreen === 'passwordchanged' &&(
                <PasswordChanged switchToLogin={switchToLogin} />
            )
        }

        
        



    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    }
})