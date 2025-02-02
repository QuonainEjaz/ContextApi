import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import {launchImageLibrary} from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useForm } from './FormContext';

const Signup = ({navigation}) => {
    const { formData, setFormData } = useForm();
      const [localFormData, setLocalFormData] = useState(formData);
      const handleSubmit = () => {
        setFormData(localFormData); 
        navigation.goBack();
      };
  const openImagePicker = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxWidth: 800,
        maxHeight: 800,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('Image Picker Error: ', response.errorMessage);
        } else {
          const source = {uri: response.assets[0].uri};
          setLocalFormData({...localFormData, imageUri: source.uri});
        }
      },
    );
  };

  const handleInputChange = (name, value) => {
    setLocalFormData({...localFormData, [name]: value});
  };

  const validateEmail = value => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleEmail = () => {
    if (!validateEmail(formData.email)) {
      setLocalFormData({...localFormData, emailError: 'Invalid email format'});
    } else {
      setLocalFormData({...localFormData, emailError: ''});
    }
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || localFormData.date;
    setLocalFormData({
      ...localFormData,
      dateOfBirth: currentDate.toLocaleDateString(),
      showDateOfBirthPicker: false,
    });
  };

  const onLicenseChange = (event, selectedDate) => {
    const currentDate = selectedDate || localFormData.date;
    setLocalFormData({
      ...localFormData,
      licenseExpirationDate: currentDate.toLocaleDateString(),
      showLicenseExpirationDatePicker: false,
    });
  };
  const validatePhone = value => {
    const phoneRegex =
      /^(\+?\d{1,4}[\s-])?(\(?\d{3}\)?[\s-])?\d{3}[\s-]?\d{4}$/;
    return phoneRegex.test(value);
  };

  const handlePhone = () => {
    if (!validatePhone(localFormData.phone)) {
      setLocalFormData({...localFormData, phoneError: 'Invalid phone number format'});
    } else {
      setLocalFormData({...localFormData, phoneError: ''});
    }
  };


  return (
    <SafeAreaView style={styles.container1}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <Text style={[styles.title, {alignSelf: 'flex-start'}]}>
          Create Account
        </Text>
        <Text style={[styles.subtitle, {alignSelf: 'flex-start'}]}>
          Create account as doctor
        </Text>
        <View style={styles.profileContainer}>
          <Image
            resizeMode="cover"
            source={
              localFormData.imageUri
                ? {uri: localFormData.imageUri}
                : require('../assets/pics/Profile.png')
            }
            style={styles.profileImage}
          />
        </View>
             <TouchableOpacity onPress={openImagePicker} style={styles.camera}>
           <Image
             source={require('../assets/pics/camera.png')}
             style={styles.cameraIcon}
           />
         </TouchableOpacity>

         <Text style={styles.label}>Doctor Name*</Text>
         <TextInput
           style={styles.input}
           placeholder="Enter your name"
           placeholderTextColor={'#AFAEB7'}
           value={localFormData.name}
           onChangeText={value => handleInputChange('name', value)}
         />

         <Text style={styles.label}>National ID*</Text>
         <TextInput
           style={styles.input}
           placeholder="Enter your national ID"
           placeholderTextColor={'#AFAEB7'}
           keyboardType="numeric"
           value={localFormData.nationalId}
           onChangeText={value => handleInputChange('nationalId', value)}
         />

         <Text style={styles.label}>Phone Number*</Text>
         <TextInput
           style={styles.input}
           placeholder="Enter your phone number"
           placeholderTextColor={'#AFAEB7'}
           keyboardType="phone-pad"
           value={localFormData.phone}
           onChangeText={value => handleInputChange('phone', value)}
           onBlur={handlePhone}
         />
         {localFormData.phoneError && <Text style={styles.error}>{localFormData.phoneError}</Text>}
        <Text style={styles.label}>E-mail*</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor={'#AFAEB7'}
          keyboardType="email-address"
          value={localFormData.email}
          onChangeText={value => handleInputChange('email', value)}
          onBlur={handleEmail}
        />
        {localFormData.emailError && (
          <Text style={styles.error}>{localFormData.emailError}</Text>
        )}

        <Text style={styles.label}>Gender*</Text>
        <Picker
          selectedValue={localFormData.selectedGender}
          onValueChange={value => handleInputChange('selectedGender', value)}
          style={styles.picker}>
          <Picker.Item
            label="Select Gender"
            value=""
            style={[styles.pickerItem, {color: '#AFAEB7'}]}
          />
          <Picker.Item label="Male" value="male" style={styles.pickerItem} />
          <Picker.Item
            label="Female"
            value="female"
            style={styles.pickerItem}
          />
        </Picker>

        <Text style={styles.label}>Language</Text>
        <Picker
          selectedValue={localFormData.selectedLanguage}
          onValueChange={value => handleInputChange('selectedLanguage', value)}
          style={styles.picker}>
          <Picker.Item
            label="Select Language"
            value=""
            style={[styles.pickerItem, {color: '#AFAEB7'}]}
          />
          <Picker.Item
            label="English"
            value="english"
            style={styles.pickerItem}
          />
          <Picker.Item
            label="Arabic"
            value="arabic"
            style={styles.pickerItem}
          />
        </Picker>

        <Text style={styles.label}>Date of birth*</Text>
        <TextInput
          style={styles.input}
          placeholder="mm/dd/yyyy"
          placeholderTextColor={'#AFAEB7'}
          value={localFormData.dateOfBirth}
          onChangeText={value => handleInputChange('dateOfBirth', value)}
        />
        <TouchableOpacity
          onPress={() => handleInputChange('showDateOfBirthPicker', true)}
          style={styles.calendar}>
          <Image
            style={{width: 20, height: 20}}
            source={require('../assets/pics/calendar.png')}
          />
          {localFormData.showDateOfBirthPicker && (
            <DateTimePicker
              value={localFormData.date}
              mode="date"
              display="default"
              onChange={onDateChange}
            />
          )}
        </TouchableOpacity>

        <Text style={styles.label}>Specialization*</Text>
        <Picker
          selectedValue={localFormData.selectedSpecialization}
          onValueChange={value =>
            handleInputChange('selectedSpecialization', value)
          }
          style={styles.picker}>
          <Picker.Item
            label="Select specialization"
            value=""
            style={[styles.pickerItem, {color: '#AFAEB7'}]}
          />
        </Picker>

        <Text style={styles.label}>License No*</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your license no"
          placeholderTextColor={'#AFAEB7'}
          value={localFormData.licenseNo}
          onChangeText={value => handleInputChange('licenseNo', value)}
        />

        <Text style={styles.label}>License Expiration Date*</Text>
        <TextInput
          style={styles.input}
          placeholder="mm/dd/yyyy"
          placeholderTextColor={'#AFAEB7'}
          value={localFormData.licenseExpirationDate}
          onChangeText={value =>
            handleInputChange('licenseExpirationDate', value)
          }
        />
        <TouchableOpacity
          onPress={() => handleInputChange('showLicenseExpirationDatePicker', true)}
          style={styles.calendar}>
          <Image
            style={{width: 20, height: 20}}
            source={require('../assets/pics/calendar.png')}
          />
          {localFormData.showLicenseExpirationDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={localFormData.date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onLicenseChange}
            />
          )}
        </TouchableOpacity>

        <Text style={styles.label}>Role</Text>
        <Picker
          selectedValue={localFormData.selectedRole}
          onValueChange={value => handleInputChange('selectedRole', value)}
          style={styles.picker}>
          <Picker.Item
            label="Select role"
            value=""
            style={[styles.pickerItem, {color: '#AFAEB7'}]}
          />
        </Picker>

        <Text style={styles.label}>Password*</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={'#AFAEB7'}
          secureTextEntry={true}
          value={localFormData.password}
          onChangeText={value => handleInputChange('password', value)}
        />

        <Text style={styles.label}>Bio</Text>
        <TextInput
          style={styles.bioInput}
          placeholder="Type here..."
          placeholderTextColor={'#AFAEB7'}
          multiline
          value={localFormData.bio}
          onChangeText={value => handleInputChange('bio', value)}
        />

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={localFormData.isSaudi}
            onValueChange={value => handleInputChange('isSaudi', value)}
          />
          <Text style={styles.checkboxText}>Are you Saudi (Nationality)?</Text>
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 20,
          }}>
          <Text style={styles.signInText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signInLink}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 400,
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'poppins',
    fontSize: 22,
    lineHeight: '33',
    letterSpacing: 1,
    fontWeight: 'bold',
    color: '#3C3B43',
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'poppins',
    fontSize: 14,
    lineHeight: '21',
    letterSpacing: 1,
    color: '#D7D6DB',
    textAlign: 'center',
    marginBottom: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: '#07193D33',
  },
  camera: {
    position: 'relative',
    top: -47,
    right: -200,
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
  label: {
    fontFamily: 'poppins',
    fontSize: 14,
    color: '#61606C',
    marginBottom: 5,
  },
  input: {
    fontFamily: 'poppins',
    borderWidth: 0,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 14,
    backgroundColor: '#EDEDED',
  },
  calendar: {
    position: 'relative',
    top: -45,
    right: -320,
  },
  picker: {
    borderWidth: 0,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#EDEDED',
  },
  pickerItem: {
    fontFamily: 'poppins',
    fontSize: 14,
  },
  bioInput: {
    fontFamily: 'poppins',
    borderRadius: 8,
    padding: 10,
    height: 80,
    marginBottom: 15,
    fontSize: 13,
    backgroundColor: '#EDEDED',
    verticalAlign: 'top',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#555',
  },
  submitButton: {
    fontFamily: 'poppins',
    backgroundColor: '#07193D',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
    fontFamily: 'poppins',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signInText: {
    fontFamily: 'Poppins',
    textAlign: 'center',
    fontSize: 14,
    color: '#555',
  },
  signInLink: {
    fontFamily: 'poppins',
    color: '#07193D90',
    fontWeight: 'bold',
  },
});

export default Signup;




