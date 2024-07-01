import { StyleSheet, Text, StatusBar, ScrollView, View, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import SearchIcon from 'react-native-vector-icons/Feather';
import { ThemeContext } from '../../DarkMode/ThemeContext';
import users from '../../assets/Influencers/Influencers';
import LinearGradient from 'react-native-linear-gradient';

const ChatScreen = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={[styles.container, { backgroundColor: theme.bgColor }]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#f8f8f8"
      />

      <View style={[styles.topbar, { backgroundColor: theme.transparent }]}>
        <View style={[styles.searchbar, { backgroundColor: theme.cards }]}>
          <SearchIcon name="search" size={25} style={[styles.searchIcon, { color: theme.white }]} />
          <View style={[styles.line, { backgroundColor: theme.white }]}></View>
          <TextInput
            style={[styles.searchInput]}
            placeholder="Search Messages, Profiles"
            clearButtonMode='always'
            placeholderTextColor={theme.white}
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          {users.map((user) => (
            <TouchableOpacity
              key={user.id}
              onPress={() => navigation.navigate('personalChat', {
                userId: user.id,
                userName: user.name,
                userImage: user.img,
                userMessage: user.messages
              })}
            >
              <View style={[styles.chats, { backgroundColor: theme.cards }]}>
                <View style={styles.left}>
                  <View style={styles.ProPic}>
                    <Image source={user.img} style={styles.PropicImg} />
                    <View style={styles.active}></View>
                  </View>
                  <View style={styles.chatDetails}>
                    <Text style={[styles.title, { color: theme.white }]}>{user.name}</Text>
                    <Text style={[styles.message, { color: theme.white }]}>
                      {user.messages && user.messages.length > 0 ? user.messages[user.messages.length - 1].text : ''}
                    </Text>
                  </View>
                </View>
                <View>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9673FF', '#522FDC']} style={styles.unread}>
                    <Text style={styles.unreadText}>{user.unread}</Text>
                  </LinearGradient>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topbar: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
    zIndex: 10,
  },
  searchInput: {
    zIndex: 10
  },
  searchbar: {
    height: 40,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "flex-start",
    gap: 20,
    alignItems: "center",
    flex: 1,
    elevation: 8
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
  },
  chats: {
    alignSelf: "stretch",
    height: 80,
    borderRadius: 25,
    shadowColor: 'black',
    elevation: 6,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    flexDirection: "row"
  },
  unread: {
    height: 25,
    width: 25,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  unreadText: {
    color: "white",
    fontWeight: "600"
  },
  ProPic: {
    height: 60,
    width: 60,
    position: "relative"
  },
  PropicImg: {
    height: 60,
    width: 60,
    borderRadius: 30
  },
  active: {
    height: 12,
    width: 12,
    backgroundColor: "#00C92C",
    borderRadius: 100,
    position: "absolute",
    left: 45
  },
  title: {
    fontWeight: "600",
  },
  message: {
    fontWeight: "400",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 30
  },
  chatDetails: {
    flexDirection: "column",
    justifyContent: "center"
  }
});
