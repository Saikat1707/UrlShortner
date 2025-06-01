import { createRoute } from "@tanstack/react-router"
import Login from "../component/Login"
import rootRoute from "./routeTree"
import Register from "../component/Register"

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component:Login
})

export const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register',
  component:Register
})
