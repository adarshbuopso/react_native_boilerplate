import {StyleSheet} from 'react-native';
import {ThemeType} from '../../theme/theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    layout: {
      flex: 1,
      backgroundColor: theme.layoutBg,
    },
  });

export default styles;
