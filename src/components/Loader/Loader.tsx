import { Box, Spinner } from "@chakra-ui/react"
import React from "react"

const Loader: React.FC = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      position="fixed"
      inset={0}
      bg="rgba(255,255,255,.6)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex={9999}
    >
      <Spinner size="lg" />
    </Box>
  )
}

export default Loader
