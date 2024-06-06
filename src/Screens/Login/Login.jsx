import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LoginComponent from '../../Components/Login/LoginComponent'
import SignupComponent from '../../Components/Login/SignupComponent'
import ForgotPassword from '../../Components/Login/ForgotPassword'
import OtpComponent from '../../Components/Login/OtpComponent'

const Login = ({navigation}) => {
    const [CurrentScreen, setCurrentScreen] = useState('otpscreen');

    const  switchToSignup =() =>{
        setCurrentScreen('signup');
    }
    
    const switchToLogin =()=>{
        setCurrentScreen('login');
    }

    const switchToForgotPassword =()=>{
        setCurrentScreen('forgotpassword');
    }

    const switchToOtpScreen =()=>{
        setCurrentScreen('otpscreen')
    }
  return (
    <View style={styles.container}>
        

        {
            CurrentScreen === 'login' && (
                <LoginComponent switchToSignup={switchToSignup} switchToForgotPassword={switchToForgotPassword} navigation={navigation}/>
            )
        }
        {
            CurrentScreen === 'signup' && (
                <SignupComponent switchToLogin={switchToLogin}/>
            )
        }
        {
            CurrentScreen === 'forgotpassword' && (
                <ForgotPassword  switchToLogin={switchToLogin}/>
            )
        }
        {
            CurrentScreen === 'otpscreen' && (
                <OtpComponent navigation={navigation}/>
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