import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native';
const Login_Signup = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container1}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ImageBackground
        source={require('../assets/pics/bg1.png')}
        style={styles.bg}
        resizeMode="cover">
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Image
          source={require('../assets/pics/bg2-Photoroom.png')}
          style={styles.img}
        />
        <View style={styles.container}>
          <Text style={[styles.text, {fontSize: 22, fontWeight: 'bold'}]}>
            Let's get started!
          </Text>
          <Text style={[styles.text, {fontSize: 16, marginTop: 10}]}>
            Login to enjoy the future we have provided, and stay healthy!
          </Text>
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: '#07193D', marginTop: 50},
            ]}
            onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.btntext, {color: '#fff'}]}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#07193D40'}]}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={[styles.btntext, {color: 'black'}]}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  img: {
    marginTop: '73%',
    width: '65%',
    margin: 'auto',
    resizeMode: 'contain',
  },
  container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  button: {
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    margin: 'auto',
    width: '380',
    height: 50,
  },
  btntext: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  text: {
    color: '#3C3B43',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    wordSpacing: 1,
  },
});

export default Login_Signup;
