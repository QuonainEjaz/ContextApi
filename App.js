import React from 'react';
import {Text} from 'react-native';
import Login_Signup from './components/Login_Signup';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Profile_overview from './components/Profile_overview';
import EditProfile from './components/EditProfile';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {FormProvider} from './components/FormContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <FormProvider>
      <NavigationContainer fallback={<Text>Loading...</Text>}>
        <Stack.Navigator initialRouteName="Login_Signup">
          <Stack.Screen
            name="Login_Signup"
            component={Login_Signup}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile_overview"
            component={Profile_overview}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FormProvider>
  );
};

export default App;
