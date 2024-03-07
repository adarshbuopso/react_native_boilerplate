import {StyleSheet} from 'react-native';
import {ThemeType} from '../../../theme/theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    continer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: theme.color,
      textAlign: 'center',
    },
  });

export default styles;
