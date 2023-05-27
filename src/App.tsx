import { Box, Flex } from "@chakra-ui/react"
import React, { Suspense } from "react"
import { Route, Routes } from "react-router-dom"

import { Loader } from "./components/Loader"
import NotFound from "./components/NotFound/NotFound"

const Home = React.lazy(() => import("@/pages"))

const App = () => {
  return (
    <Flex justifyContent="stretch" className="App">
      <Box width="full">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Box>
    </Flex>
  )
}

export default App
