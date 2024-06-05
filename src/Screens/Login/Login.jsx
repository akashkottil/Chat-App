import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LoginComponent from '../../Components/Login/LoginComponent'
import SignupComponent from '../../Components/Login/SignupComponent'

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const  switchToSignup =() =>{
        setIsLogin(false);
    }
    
    const switchToLogin =()=>{
        setIsLogin(true);
    }
  return (
    <View style={styles.container}>
        {/* <LoginComponent/> */}
        {/* <SignupComponent/> */}

        {
            isLogin ? (
                <LoginComponent switchToSignup={switchToSignup}/>
            ):(
                <SignupComponent switchToLogin={switchToLogin} />
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