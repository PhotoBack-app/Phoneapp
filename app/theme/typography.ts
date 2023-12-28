// TODO: write documentation about fonts and typography along with guides on how to add custom fonts in own
// markdown file and add links from here

import { Platform } from "react-native"
// import {
//   SpaceGrotesk_300Light as spaceGroteskLight,
//   SpaceGrotesk_400Regular as spaceGroteskRegular,
//   SpaceGrotesk_500Medium as spaceGroteskMedium,
//   SpaceGrotesk_600SemiBold as spaceGroteskSemiBold,
//   SpaceGrotesk_700Bold as spaceGroteskBold,
// } from "@expo-google-fonts/space-grotesk"

import {
  Roboto_100Thin as Roboto100Thin,
  Roboto_100Thin_Italic as Roboto100ThinItalic,
  Roboto_300Light as Roboto300Light,
  Roboto_300Light_Italic as Roboto300LightItalic,
  Roboto_400Regular as Roboto400Regular,
  Roboto_400Regular_Italic as Roboto400RegularItalic,
  Roboto_500Medium as Roboto500Medium,
  Roboto_500Medium_Italic as Roboto500MediumItalic,
  Roboto_700Bold as Roboto700Bold,
  Roboto_700Bold_Italic as Roboto700BoldItalic,
  Roboto_900Black as Roboto900Black,
  Roboto_900Black_Italic as Roboto900BlackItalic,
} from "@expo-google-fonts/roboto"
import {
  SourceCodePro_300Light as SourceCodeProLight,
  SourceCodePro_400Regular as SourceCodeProRegular,
  SourceCodePro_600SemiBold as SourceCodeProSemiBold,
} from "@expo-google-fonts/source-code-pro"

export const customFontsToLoad = {
  Roboto100Thin,
  Roboto100ThinItalic,
  Roboto300Light,
  Roboto300LightItalic,
  Roboto400Regular,
  Roboto400RegularItalic,
  Roboto500Medium,
  Roboto500MediumItalic,
  Roboto700Bold,
  Roboto700BoldItalic,
  Roboto900Black,
  Roboto900BlackItalic,
  SourceCodeProLight,
  SourceCodeProRegular,
  SourceCodeProSemiBold,
}

const fonts = {
  roboto: {
    thin: "Roboto_100Thin",
    light: "Roboto_300Light",
    normal: "Roboto_400Regular",
    medium: "Roboto_500Medium",
    semibold: "Roboto_700Bold",
    bold: "Roboto_900Black",
  },
  robotoItalic: {
    thin: "Roboto_100Thin_Italic",
    light: "Roboto_300Light_Italic",
    normal: "Roboto_400Regular_Italic",
    medium: "Roboto_500Medium_Italic",
    semibold: "Roboto_700Bold_Italic",
    bold: "Roboto_900Black_Italic",
  },
  helveticaNeue: {
    // iOS only font.
    thin: "HelveticaNeue-Thin",
    light: "HelveticaNeue-Light",
    normal: "Helvetica Neue",
    medium: "HelveticaNeue-Medium",
  },
  sansSerif: {
    // Android only font.
    thin: "sans-serif-thin",
    light: "sans-serif-light",
    normal: "sans-serif",
    medium: "sans-serif-medium",
  },
  code: {
    thin: "SourceCodePro_300Light",
    normal: "SourceCodePro_400Regular",
    bold: "SourceCodePro_600SemiBold",
  },
}

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.roboto,
  primaryItalic: fonts.robotoItalic,
  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({ ios: fonts.helveticaNeue, android: fonts.sansSerif }),
  /**
   * Lets get fancy with a monospace font!
   */
  code: fonts.code,
}
