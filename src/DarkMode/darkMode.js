import { Appearance, useColorScheme } from 'react-native';

const commonColor = {
  gradient: ["#9673FF", "#522FDC"],
  activeTab: '#522FDC',
  defaultTab: '#DDD',
};

const colorScheme = Appearance.getColorScheme();

let colorTheme = {};

if (colorScheme === 'dark') {
  colorTheme = {
    themeColor: '#333333', // Dark gray as the main theme color
    white: '#FFFFFF', // For text that needs to stand out
    gray: '#a9a9a9', // A lighter gray for less prominent elements
    bgColor: '#1e1e1e', // Very dark gray (almost black) for background
    segmentTab: '#383838', // Slightly lighter gray for tabs and other segmented controls
    segmentTabText: '#FFFFFF',
    footerBgColor: '#808080', // Darker shade of light sea green for the footer
    footerText:'#CCCCCC',
    transparent: 'transparent', // Keep transparent elements the same
    inputBar: '#383838', // Same as segmentTab to keep consistency
    cards: '#2f2f2f', // Slightly darker than segmentTab for card backgrounds
    profileBgColor: '#20b2aa', // Use the same color as the footer for profile backgrounds
    ...commonColor, // Assuming commonColor contains color properties that apply to both themes
  };
} else if (colorScheme === 'light') {
  colorTheme = {
    themeColor: '#FFFFFF',
    white: '#000000',
    gray: 'gray',
    bgColor: '#f8f8ff',
    segmentTab:'#fff0f5',
    segmentTabText: '#333333',
    footerBgColor:'#48d1cc',
    footerText:'#006666',
    transparent: 'transparent' ,
    inputBar: '#fff0f5',
    cards: '#f8f8ff',
    profileBgColor: '#48d1cc',
    ...commonColor,
  };
}

export default colorTheme;



