import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {useForm} from './FormContext';
const ProfileOverview = ({ navigation }) => {
    const {formData, setFormData} = useForm();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#F5F5F5" barStyle="dark-content" />
      <View style={styles.content}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text>{'< Back'}</Text>
        </TouchableOpacity>

        <Text style={styles.heading}>Profile Overview</Text>
        <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditProfile')}>
          <Image
            style={styles.editButtonImage}
            source={require('../assets/pics/edit_button.png')}
          />
        </TouchableOpacity>

        <View style={styles.profileContainer}>
          <Image
            source={
              formData.imageUri
                ? { uri: formData.imageUri }
                : require('../assets/pics/profile_overview.png')
            }
            style={styles.profileImage}
          />
          <View style={styles.infoContainer}>
            <View style={styles.certified}>
              <Image
                style={styles.certifiedImage}
                source={require('../assets/pics/certified.png')}
              />
              <Text style={styles.certifiedText}>Certified by Saudi Commission for Health Specialties</Text>
            </View>
            <Text style={styles.name}>{formData.name}</Text>
            <Text style={styles.specialization}>Dentist</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={{fontSize: 14, lineHeight: 21, color: '#61606C'}}>Patients</Text>
            <Text style={styles.statBox}>+617</Text>
          </View>
          <View style={styles.stat}>
            <Text style={{fontSize: 14, lineHeight: 21, color: '#61606C'}}>Experiences</Text>
            <Text style={styles.statBox}>+10 years</Text>
          </View>
          <View style={styles.stat}>
            <Text style={{fontSize: 14, lineHeight: 21, color: '#61606C'}}>Ratings</Text>
            <Text style={styles.statBox}>4.9 ⭐</Text>
          </View>
        </View>

        <Text style={[styles.sectionTitle, { marginTop: 20 }]}>About the doctor</Text>
        <Text style={styles.description}>
          Pellentesque placerat arcu in risus facilisis, sed laoreet eros laoreet...
        </Text>

        <View style={[styles.card, { marginTop: 20 }]}>
          <Text style={styles.sectionTitle}>Education</Text>
          <Text style={{ marginTop: 5,fontSize: 16,lineHeight: 24}}>Saudi Dental Medical University</Text>
          <Text style={{ marginTop: 5,fontSize: 16,lineHeight: 24}}>BDS</Text>
          <Text style={{ marginTop: 5,fontSize: 16,lineHeight: 24}}>1998 - 2002</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Work & Experience</Text>
          <Text style={{ marginTop: 15,fontSize: 16,lineHeight: 24}}>Glowing Smiles Family Dental Clinic</Text>
          <Text style={styles.description}>2010 - Present (5 years)</Text>
          <Text style={{ marginTop: 20,fontSize: 16,lineHeight: 24}}>Comfort Care Dental Clinic</Text>
          <Text style={styles.description}>2007 - 2010 (3 years)</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    padding: 20,
    flex: 1,
  },
  backButton: {
    marginBottom: 10,
  },
  heading: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3C3B43',
  },
  editButton: {
    position: 'absolute',
    width: 45,
    height: 45,
    top: 60,
    right: 20,
  },
  editButtonImage: {
    width: 45,
    height: 45,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    color: '#3C3B43',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  specialization: {
    fontSize: 14,
    lineHeight: 21,
    color: '#61606C',
  },
  certified: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 2,
  },
  certifiedImage: {
    width: 15,
    height: 15,
    marginLeft: 5,
  },
  certifiedText: {
    color: '#07193D',
    marginLeft: 7,
    fontSize: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stat: {
    alignItems: 'center',
  },
  statBox: {
    backgroundColor: '#FFFFFF',
    color: '#3C3B43',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 27,
    textAlign: 'center',
    verticalAlign: 'middle',
    width: 120,
    height: 58,
    borderRadius: 10,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    lineHeight: 27,
    fontWeight: 'bold',
  },
  description: {
    color: 'gray',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
});

export default ProfileOverview;
