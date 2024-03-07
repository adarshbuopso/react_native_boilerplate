import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/private/Login';
import Signup from '../../screens/private/Signup';
import ForgotPassword from '../../screens/private/ForgotPassword';
import {NAVIGATION} from '../../shared/navigationConstant';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.LOGIN} component={Login} />
      <Stack.Screen name={NAVIGATION.SIGNUP} component={Signup} />
      <Stack.Screen
        name={NAVIGATION.FORGOT_PASSWORD}
        component={ForgotPassword}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
