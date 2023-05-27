import { useRouteError } from "react-router-dom"

import getErrorMessage from "@/utils/getErrorMessage"

import ErrorElement from "../ErrorElement/ErrorElement"

const ErrorBoundary = () => {
  const error = useRouteError()

  const errorData = getErrorMessage(error)

  return <ErrorElement {...errorData} />
}

export default ErrorBoundary
