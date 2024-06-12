import { StyleSheet, Text, StatusBar, ScrollView, View, TextInput, Image } from 'react-native';
import React from 'react';
import SearchIcon from 'react-native-vector-icons/Feather';
import FilterIcon from '../../assets/Icons/Vector.png';
import Chat from '../../Components/Chats/Chat';

const ChatScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#f8f8f8"
      />
      <View style={styles.topbar}>
        <View style={styles.searchbar}>
          <SearchIcon name="search" size={25} color="#900" />
          <View style={styles.line}></View>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Messages, Profiles"
          />
        </View>
        <View style={styles.filter}>
          <Image source={FilterIcon} style={styles.filterImg} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <Chat navigation={navigation} />
          <Chat navigation={navigation} />
          <Chat navigation={navigation} />
          <Chat navigation={navigation} />
          <Chat navigation={navigation} />
          <Chat navigation={navigation} />
          <Chat navigation={navigation} />
          <Chat navigation={navigation} />
          <Chat navigation={navigation} />
          <Chat navigation={navigation} />
          <Chat navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8"
  },
  topbar: {
    flexDirection: "row",
    backgroundColor: "#F8F8F8",
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
    zIndex: 10,
  },
  searchbar: {
    backgroundColor: "#EAEAEA",
    height: 40,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "flex-start",
    gap: 20,
    alignItems: "center",
    flex:1
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
