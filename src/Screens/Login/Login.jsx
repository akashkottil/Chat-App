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
    const switchToCreatePassword =()=>{
        setCurrentScreen('createpassword')
    }
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