import RoutingError from "./RoutingError"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isRoutingError = (error: any): error is RoutingError => {
  return error instanceof RoutingError
}

export default isRoutingError
