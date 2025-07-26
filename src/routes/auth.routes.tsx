import type { RouteObject } from "react-router";
import { Route } from "./routes.constants";
import { Signup } from "@/pages/signup";
import { RoleSelection } from "@/pages/role-selection";

export const AuthRoutes: RouteObject[] = [
  { path: Route.Auth.Signup, element: <Signup /> },
  { path: Route.Auth.Login, element: <>Login</> },
  { path: Route.Auth.RoleSelection, element: <RoleSelection /> },
];
