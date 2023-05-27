import "@splidejs/react-splide/css"

import { extendTheme, ThemeConfig } from "@chakra-ui/react"

import { buttonTheme } from "./button"
import colors from "./colors"

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
}

const theme = extendTheme({
  config,
  colors,
  semanticTokens: {
    "chakra-body-bg": {
      _light: "white",
      _dark: "gray.600",
    },
    colors: {
      "head-text": {
        _light: "black",
        _dark: "white",
      },
      "muted-text": {
        _light: "gray.200",
        _dark: "white",
      },
    },
  },

  components: {
    Button: buttonTheme,
  },
  fonts: {
    light: "AvenirLight",
    medium: "AvenirMedium",
    bold: "AvenirBold",
    avantBold: "AvantMedium",
  },
  styles: {
    global: () => ({
      body: {
        color: "chakra-body-text",
        transitionProperty: "background-color",
        transitionDuration: "normal",
        lineHeight: "base",
        overflowX: "hidden",
      },
      "*::placeholder": {
        color: "chakra-placeholder-color",
      },
    }),
  },
})

export default theme
