import getErrorMessage from "@/utils/getErrorMessage"
import RoutingError from "@/utils/RoutingError"

import ErrorElement from "../ErrorElement/ErrorElement"

const NotFound = () => {
  const errorData = getErrorMessage(new RoutingError(404))

  return <ErrorElement {...errorData} />
}

export default NotFound
