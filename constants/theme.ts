/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const BrandColors = {
  background: "#302f2e",
  text: "#ffffff",
  mutedText: "#b9b7b7",
  border: "#dedede",
  inputText: "#505050",
  primary: "#b747f8",
  primaryDark: "#511288",
};

export const FluiColors = {
  background: "#302f2e",
  text: "#ffffff",
  mutedText: "#b9b7b7",
  inputBackground: "#ffffff",
  inputText: "#505050",
  border: "#dedede",
  primary: "#b747f8",
  primaryDark: "#511288",
  card: "#3a3837",
  placeholder: "#d9d9d9",
  success: "#3ddc84",
  sponsored: "#C98A2C",
  available: "#2E7D4F",
  danger: "#FF5353",
  chipInactive: "#3A3A3A",
  star: "#F5B301",
  markerSponsored: "#EF9F27",
  markerLivre: "#1D9E75",
  markerClosed: "#E24B4A",
  sponsoredBg: "#412402",
  sponsoredText: "#FAC775",
  livreBg: "#04342C",
  livreText: "#5DCAA5",
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const BorderRadius = {
  input: 4,
  button: 24,
  card: 12,
};

export const FluiFonts = {
  josefin: {
    regular: "JosefinSans_400Regular",
    bold: "JosefinSans_700Bold",
  },
  inter: {
    regular: "Inter_400Regular",
    medium: "Inter_500Medium",
    semiBold: "Inter_600SemiBold",
    bold: "Inter_700Bold",
  },
};

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
