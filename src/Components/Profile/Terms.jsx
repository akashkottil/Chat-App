import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { ThemeContext } from '../../DarkMode/ThemeContext'
import bannerImg from '../../assets/Influencers/Banner.png'


const Terms = () => {
  const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext);
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image source={bannerImg} style={styles.bannerImg} />
        <Text style={styles.title}>Terms and Conditions for Virtual Souls</Text>
      </View>
      <View styles={styles.contentWrapper}>
        <View styles={styles.date}>
          <Text>Last Updated on: 20/03/2024</Text>
        </View>
        <View>
          <Text>
            1. Introduction
          </Text>
          <Text>
            Welcome to Virtual Souls. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms and Conditions.
          </Text>
        </View>
        <View>
          <Text>
            1. Introduction
          </Text>
          <Text>
            Welcome to Virtual Souls. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms and Conditions.
          </Text>
        </View>
        <View>
          <Text>
            1. Introduction
          </Text>
          <Text>
            Welcome to Virtual Souls. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms and Conditions.
          </Text>
        </View>
        <View>
          <Text>
            1. Introduction
          </Text>
          <Text>
            Welcome to Virtual Souls. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms and Conditions.
          </Text>
        </View>
        <View>
          <Text>
            1. Introduction
          </Text>
          <Text>
            Welcome to Virtual Souls. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms and Conditions.
          </Text>
        </View>
        <View>
          <Text>
            1. Introduction
          </Text>
          <Text>
            Welcome to Virtual Souls. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms and Conditions.
          </Text>
        </View>
        <View>
          <Text>
            1. Introduction
          </Text>
          <Text>
            Welcome to Virtual Souls. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms and Conditions.
          </Text>
        </View>
        <View>
          <Text>
            1. Introduction
          </Text>
          <Text>
            Welcome to Virtual Souls. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms and Conditions.
          </Text>
        </View>
        <View>
          <Text>
            1. Introduction
          </Text>
          <Text>
            Welcome to Virtual Souls. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms and Conditions.
          </Text>
        </View>
        <View>
          <Text>
            1. Introduction
          </Text>
          <Text>
            Welcome to Virtual Souls. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms and Conditions.
          </Text>
        </View>
        <View>
          <Text>
            1. Introduction
          </Text>
          <Text>
            Welcome to Virtual Souls. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms and Conditions.
          </Text>
        </View>
        <View>
          <Text>
            1. Introduction
          </Text>
          <Text>
            Welcome to Virtual Souls. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms and Conditions.
          </Text>
        </View>
      </View>
    </View>
    </ScrollView>
  )
}

export default Terms

const styles = StyleSheet.create({})