import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginComponent from '../../Components/Login/LoginComponent'

const Login = () => {
  return (
    <View style={styles.container}>
        <LoginComponent/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    }
})