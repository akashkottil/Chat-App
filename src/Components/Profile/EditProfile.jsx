import React, { useContext, useState} from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  Platform
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient'
import profileDp from '../../assets/ProfilePics/trainDp.jpg'
import backIcon from "../../assets/Icons/backicon.png"
import { ThemeContext } from '../../DarkMode/ThemeContext';


const EditProfile = () => {
  const [fullName, setFullName] = useState('Akash Kottil');
  const [username, setUsername] = useState('akashkottil');
  const [email, setEmail] = useState('kottilakash@gmail.com');
  const [phone, setPhone] = useState('9539987128');
  const [gender, setGender] = useState('Male');
  const [location, setLocation] = useState('in');
  const [profilePhoto, setProfilePhoto] = useState(null);

  const pickImage = () => {
    const options = {
      title: 'Select Profile Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setProfilePhoto(source);
      }
    });
  };

  const updateProfile = () => {
    // Handle profile update logic here
    Alert.alert('Profile Updated', 'Your profile details have been updated.');
  };

    // state for theme

    const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext);

  return (
    <ScrollView style={[styles.container, {backgroundColor: theme.themeColor}]}>
      {/* <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
      {profilePhoto ? (
        <Image source={profilePhoto} style={styles.profileImage} />
      ) : (
        <Text style={styles.imagePickerText}>Tap to select a profile photo</Text>
      )}
    </TouchableOpacity> */}

      <TouchableOpacity >
        <View style={[styles.backBtn,{borderColor: theme.inputBar,backgroundColor: theme.inputBar}]}>
          <Image source={backIcon} style={styles.backIcon} />
        </View>
      </TouchableOpacity>

      <View style={styles.topSection}>
        <View style={styles.img}>
          <Image source={profileDp} style={styles.profileImg} />

        </View>

      </View>
      <View style={styles.inputs}>
        <TextInput
          style={[styles.textInput, {borderColor: theme.inputBar, backgroundColor: theme.inputBar}]}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={[styles.textInput, {borderColor: theme.inputBar, backgroundColor: theme.inputBar}]}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={[styles.textInput, {borderColor: theme.inputBar, backgroundColor: theme.inputBar}]}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <View style={styles.rowInput}>
          <TextInput
            style={[styles.number, {borderColor: theme.inputBar, backgroundColor: theme.inputBar}]}
            placeholder="Phone Number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
          <Picker
            selectedValue={gender}
            style={[styles.gender,{borderColor: theme.inputBar, backgroundColor: theme.inputBar}]}
            onValueChange={(itemValue) => setGender(itemValue)}
          >

            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </View>


        {/* <Button title="Submit" onPress={updateProfile} /> */}
        <TouchableOpacity onPress={updateProfile}>
          <LinearGradient colors={theme.gradient} style={styles.btnGradient}>
            <Text style={[styles.btnText, {color: theme.white}]}>Submit</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  imagePicker: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  imagePickerText: {
    color: '#000',
    fontSize: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  textInput: {
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 8,
    fontSize: 20,
    
  },
  gender: {
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 8,
    fontSize: 20,
    width: 180,
    elevation:8
  },
  number: {
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 8,
    fontSize: 20,
    width: 180,
    elevation:8
  },
  inputs: {
    gap: 12
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
    fontWeight: "600"
  },
  topSection: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20
  },
  profileImg: {
    height: 150,
    width: 150,
    borderRadius: 100,
    marginVertical: 30
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
  rowInput: {
    flexDirection: "row",
    flex: 1,
    gap: 10
  }
});

export default EditProfile;
