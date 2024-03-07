/**
 * Dark/Light Mode
 */

import * as React from 'react';

// Import preconfigured themes from theme file
import {themes, ThemeType} from './theme';

// Types
export interface ThemeContextInterface {
  theme: ThemeType;
  setTheme: (value: ThemeType) => void;
}

interface ThemeProviderInterface {
  children: React.ReactNode;
}

// Context
const ThemeContext = React.createContext({} as ThemeContextInterface);

// Provider to be used in index/App/or top of any parent
export const ThemeProvider = ({
  children,
}: ThemeProviderInterface): JSX.Element => {
  const [theme, setTheme] = React.useState(themes.light);
  const contextValue = React.useMemo(
    () => ({theme, setTheme}),
    [theme, setTheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// useTheme hook for easy access to theme and setTheme
export const useTheme = () => {
  const state = React.useContext(ThemeContext);
  const {theme, setTheme} = state;
  const toggleTheme = () => {
    setTheme(theme.name === 'light' ? themes.dark : themes.light);
  };
  return {theme, toggleTheme};
};
