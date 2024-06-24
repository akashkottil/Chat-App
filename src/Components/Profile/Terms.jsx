import { StyleSheet, Text, View } from 'react-native'
import React , {useContext} from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { ThemeContext } from '../../DarkMode/ThemeContext'


const Terms = () => {
  const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext);
  return (
    <View style={[styles.container, {backgroundColor: theme.tabActive}]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View >
          <Text>
            1. Introduction
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Terms

const styles = StyleSheet.create({})