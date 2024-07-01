import { StyleSheet, Text, View } from 'react-native'
import Modal from "react-native-modal"
import React, { useContext } from 'react'
import { ThemeContext } from '../../DarkMode/ThemeContext'
import LottieView from 'lottie-react-native'
import { windowHeight, windowWidth } from '../../Constants/Dimension'



const LogoutAlert = () => {
    const { theme } = useContext(ThemeContext);
    const styles = StyleSheet.create({
        img:{
            height:windowHeight,
           backgroundColor:theme.constWhite
        }
    })
    return (
        <Modal isVisible={true}>
            <View style={{
                backgroundColor: theme.themeColor,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",

            }}>
                <View
                style={{
                    alignItems:"center",
                }}
                >
                    <Text
                    
                    >Are You Sure??</Text>
                    <View style={{
                        flexDirection: "row",
                        gap:windowWidth*0.04
                    }}>
                        <View style={{
                            width: windowWidth * 0.29,
                            height: windowHeight * 0.05,
                            backgroundColor: "red",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: windowWidth * 0.03
                        }}>
                            <Text>No</Text>
                        </View>
                        <View
                            style={{
                                width: windowWidth * 0.29,
                                height: windowHeight * 0.05,
                                // backgroundColor: "red",
                                borderColor:"gray",
                                borderWidth:windowWidth*0.003,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: windowWidth * 0.03
                            }}
                        >
                            <Text>yes</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>

    )
}



export default LogoutAlert