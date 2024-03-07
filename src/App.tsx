import React from 'react';
import RootNavigator from './navigators/RootNavigator';
import ReduxProvider from './store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from './theme/useTheme';
import Layout from './components/Layout';
const App = () => {
  return (
    <SafeAreaProvider>
      <ReduxProvider>
        <ThemeProvider>
          <Layout>
            <RootNavigator />
          </Layout>
        </ThemeProvider>
      </ReduxProvider>
    </SafeAreaProvider>
  );
};

export default App;
