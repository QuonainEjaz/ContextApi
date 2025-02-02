import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {useForm} from './FormContext';
const Login = ({navigation}) => {
  const {formData, setFormData} = useForm();
  const handleLogin = () => {
    // if (!validateEmail(email)) {
    //   setErrorMessage({emailError: 'Invalid email'});
    //   return;
    // }
    // if (!validatePassword(password)) {
    //   setErrorMessage({passwordError: 'Invalid Password'});
    //   return;
    // }if (email === '' || password === '') {
    //   setErrorMessage({emailError: 'Email is required', passwordError: 'Password is required'});
    //   return;
    // }
    // if (formData.checkEmail === formData.email && formData.checkPassword === formData.password) {
    //   setFormData({
    //     ...formData,
    //     errorMessage: {emailError: '', passwordError: ''},
    //   });
    //   console.log('Email:', formData.checkEmail, 'Password:', formData.checkPassword);

      navigation.navigate('Profile');
    // } else {
      // setFormData({
      //   ...formData,
      //   errorMessage: {
      //     emailError: 'Email does not match',
      //     passwordError: 'Password does not match',
      //   },
      // });
    // }
  };
  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validatePassword = password => {
    return password.length >= 8;
  };

  return (
    <SafeAreaView style={styles.container1}>
      <StatusBar backgroundColor="#F8F9FC" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={{marginTop: -10, marginBottom: 40}}>
          <Text
            style={[
              styles.text,
              {fontSize: 26, fontWeight: 'bold', letterSpacing: 1},
            ]}>
            Login Account
          </Text>
          <Text
            style={[
              styles.text,
              {fontSize: 16, color: '#61606C', letterSpacing: 0.2},
            ]}>
            Please login with registered account
          </Text>
        </View>
        <View>
          <View>
            <Text
              style={[
                styles.text,
                {
                  marginBottom: 10,
                  fontSize: 18,
                  color: '#61606C',
                  top: 30,
                },
              ]}>
              Email
            </Text>
            <Image
              source={require('../assets/pics/Email.png')}
              style={{
                width: 24,
                height: 24,
                position: 'relative',
                top: 37,
                left: 15,
                zIndex: 1,
              }}
            />
            <TextInput
              placeholder="Enter your email"
              keyboardType="email-address"
              style={[styles.textInput, {fontSize: 16, paddingLeft: 50}]}
              onChangeText={text => setFormData({...formData, checkEmail: text})}
            />
          </View>
          {/* {formData.errorMessage.emailError ? (
            <Text style={styles.error}>{formData.errorMessage.emailError}</Text>
          ) : null} */}
          <View>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 18,
                  color: '#61606C',
                  top: 20,
                },
              ]}>
              Password*
            </Text>
            <Image
              source={require('../assets/pics/lock.png')}
              style={{
                width: 20,
                height: 20,
                position: 'relative',
                top: 35,
                left: 15,
                zIndex: 1,
              }}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={formData.isPasswordVisible}
              style={[styles.textInput, {fontSize: 16, paddingLeft: 50}]}
              onChangeText={(text) => setFormData({...formData, checkPassword: text})}
            />
            <TouchableOpacity
              style={{
                width: 20,
                height: 20,
                position: 'relative',
                top: -35,
                right: -320,
              }}
              onPress={() =>
                setFormData({
                  ...formData,
                  isPasswordVisible: !formData.isPasswordVisible,
                })
              }>
              <Image
                source={require('../assets/pics/eye-slash.png')}
                style={{width: 20, height: 20}}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop: 10}}>
              <Text
                style={[
                  styles.text,
                  {
                    alignSelf: 'flex-end',
                    color: '#07193D99',
                    fontSize: 16,
                    lineHeight: 18,
                    top: -22,
                  },
                ]}>
                Forget Password?
              </Text>
            </TouchableOpacity>
            {/* {formData.errorMessage.passwordError ? (
              <Text style={[styles.error, {top: -40}]}>
                {formData.errorMessage.passwordError}
              </Text>
            ) : null} */}
          </View>
        </View>
        <TouchableOpacity
          style={[styles.button, {marginTop: 20, marginBottom: 10}]}
          onPress={handleLogin}>
          <Text style={[styles.buttontext]}>Login</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            justifyContent: 'center',
          }}>
          <Text style={[styles.text, {fontSize: 16}]}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            style={{}}
            onPress={() => navigation.navigate('Signup')}>
            <Text
              style={[
                styles.text,
                {color: '#07193D', fontSize: 16, marginLeft: 5},
              ]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <Image
          resizeMode="contain"
          source={require('../assets/pics/or.png')}
          style={[
            {width: '100%', marginHorizontal: 'auto', marginVertical: 20},
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F9FC',
  },
  container: {
    flex: 0.8,
    width: '360',
  },
  textInput: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#EDEDED',
  },
  text: {
    color: '#3C3B43',
  },
  button: {
    backgroundColor: '#07193D',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  buttontext: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    padding: 5,
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 10,
  },
});

export default Login;
