// Types
interface SpacingType {
  borderRadius: number;
  layoutPaddingH: number;
  containerPaddingV: number;
  cardMarginB: number;
}

interface TypeSizesType {
  FONT_SIZE_SMALL: number;
  FONT_SIZE_MEDIUM: number;
  FONT_SIZE_LARGE: number;
  FONT_WEIGHT_LIGHT: number;
  FONT_WEIGHT_MEDIUM: number;
  FONT_WEIGHT_HEAVY: number;
}

export interface ThemeType {
  name: string;
  color: string;
  primary: string;
  layoutBg: string;
  cardBg: string;
  cardBorderColor: string;
  accent: string;
  error: string;
}

interface ThemesType {
  light: ThemeType;
  dark: ThemeType;
}

// Spacing:- Common margins and paddings
const spacing: SpacingType = {
  borderRadius: 16,
  layoutPaddingH: 16,
  containerPaddingV: 22,
  cardMarginB: 16,
};

// Type Sizes:- Font sizes and weights
const typeSizes: TypeSizesType = {
  FONT_SIZE_SMALL: 12,
  FONT_SIZE_MEDIUM: 14,
  FONT_SIZE_LARGE: 16,
  FONT_WEIGHT_LIGHT: 200,
  FONT_WEIGHT_MEDIUM: 600,
  FONT_WEIGHT_HEAVY: 800,
};

// Themes:- Can alter values here. Can only be consumed through Context (see useTheme.js file)
const themes: ThemesType = {
  light: {
    name: 'light',
    color: '#695D5D',
    primary: '#EF936E',
    layoutBg: '#F4F3F1',
    cardBg: '#ffffff',
    cardBorderColor: '#EEECEC',
    accent: '#0071ff',
    error: '#B00020',
  },
  dark: {
    name: 'dark',
    color: '#ffffff',
    primary: '#EF936E',
    layoutBg: '#121212',
    cardBg: '#1e1e1e',
    cardBorderColor: '#1A1A1A',
    accent: '#0071ff',
    error: '#B00020',
  },
};

export {spacing, typeSizes, themes};
