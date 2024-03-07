import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '../../../theme/useTheme';
import createStyle from './styles';
import {useNavigation} from '@react-navigation/native';
import {NAVIGATION} from '../../../shared/navigationConstant';
import {STRINGS} from '../../../shared/constants';

const Login = () => {
  const {theme, toggleTheme} = useTheme();
  const style = createStyle(theme);
  const navigation = useNavigation();
  return (
    <View style={style.continer}>
      <Text style={style.text} onPress={() => toggleTheme()}>
        Change Theme
      </Text>
      <Text
        style={style.text}
        onPress={() => navigation.navigate(STRINGS.SIGNUP)}>
        Go to next
      </Text>
    </View>
  );
};

export default Login;
