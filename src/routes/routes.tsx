import type { RouteObject } from "react-router";
import { Route } from "./routes.constants";
import { App } from "@/app";
import { AuthRoutes } from "./auth.routes";
import { UserRoutes } from "./user.routes";
import { DashboardRoutes } from "./dashboard.routes";

export const Routes: RouteObject[] = [
  {
    path: Route.Index,
    children: [
      {
        index: true,
        element: <App />,
      },
      ...AuthRoutes,
      ...UserRoutes,
      ...DashboardRoutes,
    ],
  },
];
