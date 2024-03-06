import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppNavigator from '../AppNavigator';
import AuthNavigator from '../AuthNavigator';
const token = 'abc';
const RootNavigator = () => {
  return (
    <NavigationContainer>
      {token ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
