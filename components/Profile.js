import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar, FlatList, TouchableOpacity, useWindowDimensions } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useForm } from './FormContext';

const tabelement = [
  { id: 1, tabs: 'Overview', image: require('../assets/pics/edit-2.png'), screen: 'Profile_overview' },
  { id: 2, tabs: 'My Patients', image: require('../assets/pics/heart.png'), screen: '' },
  { id: 3, tabs: 'Work Schedule', image: require('../assets/pics/calendar-tick.png'), screen: '' },
  { id: 4, tabs: 'Prescriptions', image: require('../assets/pics/note.png'), screen: '' },
  { id: 5, tabs: 'Reviews', image: require('../assets/pics/star.png'), screen: '' },
  { id: 6, tabs: 'Library', image: require('../assets/pics/document-text.png'), screen: '' },
  { id: 7, tabs: 'Blog', image: require('../assets/pics/grammerly.png'), screen: '' },
  { id: 8, tabs: 'Emergency No.', image: require('../assets/pics/call-calling.png'), screen: '' },
  { id: 9, tabs: 'Settings', image: require('../assets/pics/edit-2.png'), screen: '' },
  { id: 10, tabs: 'Help', image: require('../assets/pics/edit-2.png'), screen: '' },
  { id: 11, tabs: 'Logout', image: require('../assets/pics/edit-2.png'), screen: 'Login_Signup' },
];

const ProfileViewTabs = ({ tabelement, navigation }) => (
  <TouchableOpacity
    style={styles.wrapper}
    onPress={() => navigation.navigate(tabelement.screen)}
  >
    <View style={styles.container}>
      <Image style={styles.icon} source={tabelement.image} />
      <Text style={styles.text}>{tabelement.tabs}</Text>
      <Image style={styles.arrowkey} source={require('../assets/pics/arrow-right.png')} />
    </View>
  </TouchableOpacity>
);


const ProfileUI = ({ formData, setFormData, navigation }) => {
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
          const source = { uri: response.assets[0].uri }; // Access the URI of the image
          setFormData({ ...formData, imageUri: source.uri });
        }
      }
    );
  };

  return (
    <View style={styles.bg}>
      <StatusBar backgroundColor={'#27334E'} barStyle="light-content" />
      <View style={styles.bg1}>
        <Image
          source={formData.imageUri ? { uri: formData.imageUri } : require('../assets/pics/Profile.png')}
          style={styles.profileImage}
        />
        
          <TouchableOpacity onPress={openImagePicker} style={styles.getPic}>
            <Image source={require('../assets/pics/camera1.png')} style={styles.camera} />
          </TouchableOpacity>
        
        <View>
          <Text style={styles.profileName}>{formData.name}</Text>
          <Text style={styles.licenseNo}>License No. {formData.licenseNo}</Text>
        </View>
      </View>
      <View style={styles.bg2}>
        <View style={styles.dash}>
          <View style={styles.dashboard}>
            <View style={styles.outterPicWrapper}>
              <Image source={require('../assets/pics/wallet.png')} style={styles.innerPicWrapper} />
            </View>
            <Text style={styles.walletText}>Wallet</Text>
          </View>
          <View style={styles.dashboard}>
            <View style={styles.outterPicWrapper}>
              <Image source={require('../assets/pics/invoice.png')} style={styles.innerPicWrapper} />
            </View>
            <Text style={styles.invoiceText}>Invoice</Text>
          </View>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={tabelement}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <ProfileViewTabs tabelement={item} navigation={navigation} />}
          style={styles.flattlist}
        />
      </View>
    </View>
  );
};

const Profile = ({ navigation }) => {
  const { formData, setFormData } = useForm();
  return <ProfileUI formData={formData} setFormData={setFormData} navigation={navigation} />;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginBottom: 10,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 13,
    borderRadius: 5,
    width: '97%',
  },
  text: {
    color: '#9A9A9',
    fontSize: 18,
    fontFamily: 'poppins-regular',
    letterSpacing: 2,
    marginLeft: 20,
  },
  arrowkey: {
    marginLeft: 'auto',
  },
  icon: {
    marginLeft: 0,
  },
  bg: {
    flex: 1,
    backgroundColor: '#27334E',
  },
  bg1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 40,
  },
  bg2: {
    flex: 5,
    alignItems: 'center',
    backgroundColor: '#ECECEC',
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#07193D33',
    marginLeft: 40,
    marginRight: 10,
  },
  profileName: {
    fontFamily: 'fantasy-medium',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 1,
    marginBottom: 5,
  },
  licenseNo: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 0,
  },
  dash: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '90%',
    height: '18%',
    position: 'relative',
    top: -40,
  },
  dashboard: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 30,
    borderRadius: 8,
    width: '50%',
  },
  outterPicWrapper: {
    width: 45,
    height: 45,
    marginBottom: 10,
    borderRadius: 25,
    borderWidth: 4,
    overflow: 'hidden',
    borderColor: '#8998',
    backgroundColor: '#27334E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerPicWrapper: {
    color: '#FFFFFF',
  },
  walletText: {
    fontFamily: 'barycentric',
    fontSize: 16,
    color: '#27334E',
    fontWeight: 'bold',
  },
  invoiceText: {
    fontFamily: 'barycentric',
    fontSize: 16,
    color: '#27334E',
    fontWeight: 'bold',
  },
  flattlist: {
    flex: 1,
    width: '95%',
    marginTop: -22,
    marginBottom: 20,
  },
  getPic: {
    width: 25,
    height: 25,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#969696',
    borderRadius: 50,
    backgroundColor: '#2B2B2B',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 71,
    left: 97,
  },
  camera: {
    color: '#DBDBDB',
    width: 15,
    height: 15,
    resizeMode: 'cover',
  },
});

export default Profile;
