import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LoginComponent from '../../Components/Login/LoginComponent'
import SignupComponent from '../../Components/Login/SignupComponent'
import ForgotPassword from '../../Components/Login/ForgotPassword'
import OtpComponent from '../../Components/Login/OtpComponent'
import CreatePassword from '../../Components/Login/CreatePassword'


const Login = ({navigation}) => {
    const [CurrentScreen, setCurrentScreen] = useState('createpassword');
    

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
        {
            CurrentScreen === 'createpassword' && (
                <CreatePassword/>
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