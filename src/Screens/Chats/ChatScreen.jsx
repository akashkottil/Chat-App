import { StyleSheet, Text, StatusBar, ScrollView, View, TextInput, Image } from 'react-native';
import React, { useContext } from 'react';
import SearchIcon from 'react-native-vector-icons/Feather';
import Chat from '../../Components/Chats/Chat';
import { ThemeContext } from '../../DarkMode/ThemeContext';

const ChatScreen = ({ navigation }) => {
  const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext);
  return (
    <View style={[styles.container,{backgroundColor: theme.bgColor}]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#f8f8f8"
      />
      <View style={[styles.topbar,{backgroundColor: theme.transparent}]}>
        <View style={[styles.searchbar,{backgroundColor: theme.cards}]}>
          <SearchIcon name="search" size={25} style={[styles.searchIcon ,{color: theme.white}]} />
          <View style={[styles.line ,{backgroundColor: theme.white}]}></View>
          <TextInput
            style={[styles.searchInput,]}
            placeholder="Search Messages, Profiles"
            placeholderTextColor={theme.white}
          />
        </View>
        {/* <View style={styles.filter}>
          <Image source={FilterIcon} style={styles.filterImg} />
        </View> */}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
         
          <Chat navigation={navigation} />
          
          {/* <Chat navigation={navigation} />  */}
        </View>
      </ScrollView>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: theme.bgColor
  },
  topbar: {
    flexDirection: "row",
    // backgroundColor: theme.transparent,
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
    zIndex: 10,
  },
  
  searchbar: {
    // backgroundColor: theme.inputBar ,
    height: 40,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "flex-start",
    gap: 20,
    alignItems: "center",
    flex:1,
    elevation:8
  },
  filter: {
    // flex: 1,
    alignItems: "center",
    alignItems:"flex-end",
  },
  filterImg: {
    height: 30,
    width: 30
  },
  main: {
    flex: 8,
    padding: 15,
    gap: 12
  },
  line: {
    height: 22,
    width: 1.5,
    borderRadius: 80,
    backgroundColor: "black"
  },
});
