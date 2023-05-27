import { defineStyle, defineStyleConfig } from "@chakra-ui/react"

const variantSolid = defineStyle((props) => {
  const { colorScheme: c } = props

  if (c === "white") {
    return {
      bg: "transparent",
      color: "black",
      fontWeight: "regular",
      _hover: {
        bg: "white",
        _disabled: {
          bg: "transparent",
        },
      },
    }
  }

  if (c === "black") {
    return {
      bg: "gray.100",
      fontWeight: "regular",
      color: "white",
      _hover: {
        bg: "gray.200",
        _disabled: {
          bg: "gray.100",
        },
      },
    }
  }

  return {}
})

export const buttonTheme = defineStyleConfig({
  baseStyle: {
    borderRadius: 0,
    border: "1px solid rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "12px",
  },
  variants: {
    solid: variantSolid,
  },
})
