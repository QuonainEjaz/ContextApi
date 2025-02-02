import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {Picker} from '@react-native-picker/picker';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useForm } from './FormContext';
const EditProfile = ({navigation}) => {
  const { formData, setFormData } = useForm();
  const [localFormData, setLocalFormData] = useState(formData);
  const openImagePicker = (imageType) => {
    launchImageLibrary(
      {
        mediaType: 'photo', // Or 'video' if you want to pick videos
        includeBase64: false, // Set to true if you want base64 encoded image
        maxWidth: 800, // Optional: scale the image
        maxHeight: 800, // Optional: scale the image
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('Image Picker Error: ', response.errorMessage);
        } else {
          const source = {uri: response.assets[0].uri};
          setLocalFormData({...localFormData, [imageType]: source.uri});
        }
      },
    );
  };
  const handleUpdateProfile = () => {
    setFormData(localFormData); 
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#EBEBEB" barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text>{'< Back'}</Text>
        </TouchableOpacity>

        <Text style={styles.heading}>Edit Profile</Text>
        <View style={styles.profileContainer}>
          <Image
            resizeMode="contain"
            source={
              localFormData.imageUri
                ? {uri: localFormData.imageUri}
                : require('../assets/pics/profile_overview.png')
            }
            style={styles.profileImage}
          />
        </View>
        <TouchableOpacity onPress={() => openImagePicker('imageUri')} style={styles.camera}>
          <Image
            source={require('../assets/pics/camera.png')}
            style={styles.cameraIcon}
          />
        </TouchableOpacity>

        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value={localFormData.name} onChangeText={(value)=>setLocalFormData({...localFormData, name: value})} />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={localFormData.email}
          onChangeText={(value)=>setLocalFormData({...localFormData, email: value})}
          keyboardType="email-address"
        />
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={localFormData.phone}
          onChangeText={(value)=>setLocalFormData({...localFormData, phone: value})}
          keyboardType="phone-pad"
        />
        <Text style={styles.label}>DOB</Text>
        <TextInput style={styles.input} value={localFormData.dateOfBirth} onChangeText={(value)=>setLocalFormData({...localFormData, dateOfBirth: value})} />

        <Text style={styles.label}>Gender</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={localFormData.gender}
            onValueChange={(value) => setLocalFormData({...localFormData, gender: value})}>
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
          </Picker>
        </View>

        <Text style={styles.label}>Bio</Text>
        <TextInput
          style={[styles.input, styles.bio]}
          value={localFormData.bio}
          onChangeText={(value) => setLocalFormData({...localFormData, bio: value})}
          multiline
        />

        <View style={styles.uploadContainer}>
          <Text style={{color: '#61606C', fontSize: 16, lineHeight: 16}}>
            Signature
          </Text>
          <TouchableOpacity onPress={() => openImagePicker('signature')}>
            <Image 
            resizeMode="cover"  source={
              localFormData.signature
                ? {uri: localFormData.signature}
                : require('../assets/pics/upload.png')
            }
            style={styles.uploadIcon} />
          </TouchableOpacity>
          <Text style={{color: '#61606C', fontSize: 12}}>Format: png</Text>
        </View>

        <TouchableOpacity style={styles.updateButton} onPress={handleUpdateProfile}>
          <Text style={styles.updateButtonText}>Update Profile</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: '#EBEBEB',
    flex: 1,
  },
  backButton: {
    marginTop: 1,
    marginBottom: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    lineHeight: 16,
    color: '#61606C',
    marginBottom: 1,
    marginTop: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: -20,
  },
  profileImage: {
    width: 122,
    height: 122,
    borderRadius: 65,
    borderWidth: 3,
    borderColor: '#07193D33',
    marginTop: 10,
    marginBottom: -50,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  camera: {
    position: 'relative',
    right: -210,
    zIndex: 1,
    width: 30,
    height: 30,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#07193D33',
    borderRadius: 50,
    backgroundColor: '#00000040',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIcon: {
    color: '#fff',
    width: 20,
    height: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    color: '#AFAEB7',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  pickerContainer: {
    marginTop: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
  },
  bio: {
    height: 80,
  },
  uploadContainer: {
    marginTop: 10,
  },
  updateButton: {
    backgroundColor: '#07193D',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  uploadIcon: {
    width: 150,
    height: 100,
  },
});

export default EditProfile;
