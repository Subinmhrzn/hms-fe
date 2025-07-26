import { Routes } from "@/routes";
import { createBrowserRouter, RouterProvider } from "react-router";

const browserRouter = createBrowserRouter(Routes);

export const BrowserRouterProvider = () => {
  return <RouterProvider router={browserRouter} />;
};
