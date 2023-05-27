import "swiper/css"
import "swiper/css/navigation"
import "./styles/global.css"

import { ChakraProvider, ColorModeScript, createStandaloneToast } from "@chakra-ui/react"
import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from "./App"
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary"
import theme from "./theme"

const { ToastContainer } = createStandaloneToast({ theme })

const router = createBrowserRouter([
  {
    path: "/*",
    element: (
      <>
        <App />
        <ToastContainer />
      </>
    ),
    errorElement: <ErrorBoundary />,
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
)
