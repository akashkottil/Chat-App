import { StyleSheet, Text, View, Image,TextInput} from 'react-native'
import React, {useContext} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import LottieView from 'lottie-react-native';
import { ThemeContext } from '../../DarkMode/ThemeContext';
import { useNavigation } from '@react-navigation/native'
import colorTheme from '../../DarkMode/darkMode';

const PasswordChanged = ({switchToLogin}) => {
    const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext);
    const navigation = useNavigation();

    const handleLogin = ()=>{
        navigation.navigate('login')
    }
  return (
    <View style={[styles.container, {backgroundColor: theme.themeColor}]}>
    {/* <View style={styles.topbar}>

</View> */}
    <View style={styles.wrapper}>
    <View style={styles.lottieContainer}>
          <LottieView
            source={require('../../assets/animations/success.json')}
            autoPlay
            loop={false}
            style={styles.lottie}
          />
          
        </View>
        <View >
            <Text style={[styles.note, {color: theme.white}]}>Password Changed!</Text>
        </View>
        <View >
            <Text style={[styles.para, {color: theme.white}]}>Your password has been changed successfully.</Text>
        </View>
        
        <TouchableOpacity style={styles.btnContainer} onPress={handleLogin}>
            <LinearGradient colors={colorTheme.gradient} style={styles.btnGradient}>
                <Text style={[styles.btnText, {color: theme.constWhite}]} onPress={switchToLogin}>Back to Login</Text>
            </LinearGradient>
        </TouchableOpacity>
    </View>
</View>
  )
}

export default PasswordChanged

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        // backgroundColor: colorTheme.themeColor,
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
        justifyContent: "center",
        // justifyContent: "center",
        alignItems:"center"
    },
    note: {
        fontSize: 45,
        fontWeight: "600",
        alignItems: "flex-start",
        // color: colorTheme.white
    },
    para:{
        fontSize:16,
        // color: colorTheme.white
    },

    btnContainer: {
        width:300,
        

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

    lottieContainer: {
        width: '100%',
        alignItems: 'center',
      },
      lottie: {
        width: 200,
        height: 200,
      },

})