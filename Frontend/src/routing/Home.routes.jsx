import { createRoute } from "@tanstack/react-router"
import Card from "../component/Card"
import rootRoute  from "./routeTree"

export const HomeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component:Card
})