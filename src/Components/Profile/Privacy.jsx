import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useContext } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { ThemeContext } from '../../DarkMode/ThemeContext'

import backIcon from '../../assets/Icons/backicon.png'
import { useNavigation } from '@react-navigation/native'

const termsData = [
  {
    heading: "Introduction",
    paragraph: "Welcome to Virtual Souls. Your privacy is important to us.This Privacy Policy explains how we collect, use, disclose, and safeguard yourinformation when you visit our website."
  },

  {
    heading: "Information Collection and Use",
    paragraph: "We collect various types of information for various purposes to provide and improve our service to you.",
    points: [
      'Personal Data: While using our service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to, email address, first name and last name, phone number, and usage data.',
      'Usage Data: We may also collect information on how the service is accessed and used ("Usage Data"). This Usage Data may include information such as your computers IP address, browser type, browser version, the pages of our service that you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.'
    ]
  },
  {
    heading: "Cookies",
    paragraph: "We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your computer."
  },
  {
    heading: "Disclosure of Data",
    paragraph: "We may disclose your personal information in the good faith belief that such action is necessary to:",
    points:['Comply with a legal obligation', 'Protect and defend the rights or property of Virtual Souls', 'Prevent or investigate possible wrongdoing in connection with the service', 'Protect the personal safety of users of the service or the public', 'Protect against legal liability']
  },
  {
    heading: "Data Retention",
    paragraph: "We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy."
  },
  {
    heading: "Changes to This Privacy Policy",
    paragraph: "We may update our Privacy Policy from time to time. We willnotify you of any changes by posting the new Privacy Policy on this page."
  },
  {
    heading: "Governing Law",
    paragraph: "This Privacy Policy shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions."
  },
  {
    heading: "Contact Us",
    paragraph: "If you have any questions about this Privacy Policy, please contact us at info@virtualsouls.io"
  },
]

const Privacy = ({switchToList}) => {
  // state for theme

  const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext);

  // used for messure the screen width and height

  const { height, width } = useWindowDimensions();

  const navigation = useNavigation();

  // const navigationBack = () => {
  //   navigation.navigate('profilelist')
  // }
  return (
    <ScrollView >
      <View style={[styles.topbar, { backgroundColor: theme.themeColor }]}>
        <TouchableOpacity style={[styles.backBtn, { backgroundColor: theme.inputBar, borderColor: theme.inputBar }]} onPress={switchToList} >
          <View >
            <Image source={backIcon} style={styles.backIcon} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.container, { backgroundColor: theme.themeColor }]}>
        <Text style={[styles.title, { color: theme.white, }]}>Privacy Policy for
          Virtual Souls</Text>
        <View styles={styles.contentWrapper}>
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
                  {
                    data.points && data.points.map((point) => (
                      <View  style={styles.listItem}>
                        <Text style={styles.bulletPoint}>•</Text>
                        <Text style={styles.itemText}>{point}</Text>
                      </View>
                    ))
                  }
                </View>
              ))
            }
          </View>

        </View>
      </View>
    </ScrollView>
  )
}

export default Privacy

const styles = StyleSheet.create({
  banner: {},
  bannerImg: {},
  container: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 20,
    paddingVertical:20
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
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  bulletPoint: {
    width: 10,
    textAlign: 'center',
  },
  itemText: {
    flex: 1,
    paddingLeft: 10,
  },
});