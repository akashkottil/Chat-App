import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LoginComponent from '../../Components/Login/LoginComponent'
import SignupComponent from '../../Components/Login/SignupComponent'
import ForgotPassword from '../../Components/Login/ForgotPassword'

const Login = ({navigation}) => {
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

        {/* <ForgotPassword switchToLogin={switchToLogin} /> */}

        {/* {
            isLogin ? (
                <LoginComponent switchToSignup={switchToSignup}/>
            ):(
                <SignupComponent switchToLogin={switchToLogin} />
            )
        } */}



    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    }
})