import React from 'react';
import {StatusBar, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useTheme, ThemeContextInterface} from '../../theme/useTheme';
import {LayoutPropsType} from '../../types/components';
import createStyle from './styles';

const Layout = ({children, style}: LayoutPropsType) => {
  const {theme}: Partial<ThemeContextInterface> = useTheme();
  const styles = createStyle(theme);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated
        backgroundColor={theme.cardBg}
        barStyle={theme?.name === 'light' ? 'dark-content' : 'light-content'}
      />
      <View style={[styles.layout, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default Layout;
