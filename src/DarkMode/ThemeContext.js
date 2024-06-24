// ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

const commonColor = {
  gradient: ["#9673FF", "#522FDC"],
  activeTab: '#522FDC',
  defaultTab: '#DDD',
};

const lightTheme = {
  themeColor: '#FFFFFF',
  white: '#000000',
  black: '#FFFFFF',
  constWhite: '#FFFFFF',
  gray: 'gray',
  bgColor: '#f8f8ff',
  segmentTab: '#fff0f5',
  segmentTabText: '#333333',
  footerBgColor: '#48d1cc',
  footerText: '#006666',
  transparent: 'transparent',
  inputBar: '#fff0f5',
  cards: '#fff0f5',
  profileBgColor: '#48d1cc',
  tabActive: "#522FDC",
  ...commonColor,
};

const darkTheme = {
  themeColor: '#333333',
  white: '#FFFFFF',
  black: '#000000',
  constWhite: '#FFFFFF',
  gray: '#a9a9a9',
  bgColor: '#1e1e1e',
  segmentTab: '#383838',
  segmentTabText: '#FFFFFF',
  footerBgColor: '#808080',
  footerText: '#CCCCCC',
  transparent: 'transparent',
  inputBar: '#383838',
  cards: '#2f2f2f',
  profileBgColor: '#20b2aa',
  tabActive: "#522FDC",
  ...commonColor,
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');
  const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    setIsDarkMode(colorScheme === 'dark');
  }, [colorScheme]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
