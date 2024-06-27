import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useContext } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { ThemeContext } from '../../DarkMode/ThemeContext'

import backIcon from '../../assets/Icons/backicon.png'
import { useNavigation } from '@react-navigation/native'

// terms data that are mapping

const termsData = [
  {
    heading: "1. Introduction",
    paragraph: "Welcome to Virtual Souls. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms and Conditions."
  },

  {
    heading: "2. Definitions",
    paragraph: "We, us, and our refer to Virtual Souls. User, you, and your refer to site visitors, customers, and any other users of the site.",
  },
  {
    heading: "3. Intellectual Property Rights",
    paragraph: "All content on this site, including text, graphics, logos, and images, is our property or the property of our licensors and is protected by Indian and international intellectual property laws."
  },
  {
    heading: "4. Use of Site and Service",
    paragraph: "The website and services are intended for business and professional use. You agree not to use the website or services for any illegal or unauthorized purpose."
  },
  {
    heading: "5. User Content",
    paragraph: "If you submit, post, or display any content on the site, you grant us a non-exclusive, worldwide, royalty-free license to use, modify, publicly perform, publicly display, reproduce, and distribute such content."
  },
  {
    heading: "6. Privacy Policy",
    paragraph: "Your use of our website is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the site and informs users of our data collection practices."
  },
  {
    heading: "7. Modifications to Terms",
    paragraph: "We reserve the right to change these terms at any time. Your continued use of the site after any changes constitutes your acceptance of the new Terms."
  },
  {
    heading: "8. Governing Law",
    paragraph: "These Terms and Conditions and your use of the website are governed by and construed in accordance with the laws of India."
  },
  {
    heading: "9. Contact Information",
    paragraph: "For any questions regarding these Terms and Conditions, please contact us at info@virtualsouls.io"
  },
  {
    heading: "10. Disclaimer of Warranties and Limitation of Liability",
    paragraph: "The website and services are provided on an as is and as available basis. We do not warrant that the site or services will meet your specific requirements or be uninterrupted, timely, secure, or error-free."
  },
  {
    heading: "11. Indemnification",
    paragraph: "You agree to indemnify, defend and hold harmless Virtual Souls and our partners, agents, officers, directors, employees, subcontractors, successors, assigns, third-party suppliers of information and documents, advertisers, product and service providers, and affiliates from any liability, loss, claim, and expense (including reasonable attorneys' fees) related to your violation of this agreement or use of the site."
  },
  {
    heading: "12. Severability",
    paragraph: "If any part of these Terms and Conditions is determined to be invalid or unenforceable pursuant to applicable law, the remaining parts will continue in full force and effect."
  },

]



const Terms = ({switchToList}) => {

  // state for theme

  const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext);

  // used for messure the screen width and height

  const { height, width } = useWindowDimensions();

  const navigation = useNavigation();


  return (
    <ScrollView >
      <View style={[styles.topbar,{backgroundColor: theme.themeColor}]}>
        <TouchableOpacity style={[styles.backBtn, { backgroundColor: theme.inputBar, borderColor: theme.inputBar }]} onPress={switchToList} >
          <View >
            <Image source={backIcon} style={styles.backIcon} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.container, { backgroundColor: theme.themeColor }]}>
        <Text style={[styles.title, { color: theme.white, }]}>Terms and Conditions for Virtual Souls</Text>
        <View styles={styles.contentWrapper}>
          <View>
            <Text style={[styles.date, { color: theme.white }]}>Last Updated on: 20/03/2024</Text>
          </View>
          <View style={styles.termsWrapper}>
            {
              termsData.map((data) => (
                <View style={styles.termsCard}>
                  <Text style={[styles.heading, { color: theme.white }]}>
                    {data.heading}
                  </Text>
                  <Text style={[styles.paragraph, { color: theme.white }]}>
                    {data.paragraph}
                  </Text>
                </View>
              ))
            }
          </View>

        </View>
      </View>
    </ScrollView>
  )
}

export default Terms

const styles = StyleSheet.create({
  banner: {},
  bannerImg: {},
  container: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 20,
    paddingVertical: 20
  },
  contentWrapper: {

  },
  date: {
    paddingVertical: 20
  },
  heading: {
    fontSize: 20
  },
  paragraph: {},
  title: {
    fontSize: 25,
    justifyContent: "center",
    fontWeight: "600",
    alignItems: "center"
  },
  termsCard: {

  },
  termsWrapper: {
    gap: 20
  },
  topbar: {
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 20,
},
backBtn: {
  height: 50,
  width: 50,
  borderWidth: 0.5,
  borderRadius: 15,
  justifyContent: "center",
  alignItems: "center",
  elevation: 10
},
backIcon: {
  height: 19,
  width: 19
},
});