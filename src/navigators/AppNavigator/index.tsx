import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '../../theme/useTheme';
import Layout from '../../components/Layout';

const AppNavigator = () => {
  const {theme, toggleTheme} = useTheme();
  const [themeChange, setThemeChange] = useState(false);

  const handleThemeChange = () => {
    toggleTheme(themeChange);
    setThemeChange(!themeChange);
  };
  return (
    <Layout>
      <Pressable onPress={handleThemeChange}>
        <Text>Change Theme </Text>
      </Pressable>
    </Layout>
  );
};

export default AppNavigator;
