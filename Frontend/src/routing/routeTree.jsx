import { createRootRoute } from "@tanstack/react-router";
import App from "../App";
import {loginRoute, registerRoute } from "./Auth.routes";
import { HomeRoute } from "./Home.routes";

const rootRoute = createRootRoute({
  component: App,
});

rootRoute.addChildren([loginRoute,HomeRoute,registerRoute]);

const routeTree = rootRoute;
export default routeTree;
