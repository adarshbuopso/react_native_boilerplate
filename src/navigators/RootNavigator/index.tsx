import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import React from 'react';
import AppNavigator from '../AppNavigator';
import AuthNavigator from '../AuthNavigator';
import {useTheme} from '../../theme/useTheme';

const RootNavigator = () => {
  const {theme} = useTheme();
  return (
    <NavigationContainer
      theme={theme?.name === 'light' ? DefaultTheme : DarkTheme}>
      {'' ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
