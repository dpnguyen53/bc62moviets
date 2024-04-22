import { Route } from "react-router-dom";

import AdminTemplate from "../pages/AdminTemplate";
import AddUserPage from "../pages/AdminTemplate/AddUserPage";
import DashboardPage from "../pages/AdminTemplate/DashboardPage";
import AuthenPage from "../pages/AuthenPage";
import AboutPage from "../pages/HomeTemplate/AboutPage";
import HomePage from "../pages/HomeTemplate/HomePage";
import ListMoviePage from "../pages/HomeTemplate/ListMoviePage";
import HomeTemplate from "../pages/HomeTemplate";
import Another from "../pages/Another";

type TRoute = {
  path: string;
  element: any;
  nested?: TRoute[]; // optional
};

const routes: TRoute[] = [
  {
    path: "",
    element: HomeTemplate,
    nested: [
      { path: "", element: HomePage },
      { path: "about", element: AboutPage },
      { path: "list-movie", element: ListMoviePage },
    ],
  },
  {
    path: "admin",
    element: AdminTemplate,
    nested: [
      { path: "dashboard", element: DashboardPage },
      { path: "add-user", element: AddUserPage },
    ],
  },
  {
    path: "auth",
    element: AuthenPage,
  },
  {
    path: "another",
    element: Another,
  },
];

const renderRoutes = () => {
  return routes.map((route) => {
    if (route.nested) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.nested.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<item.element />}
            />
          ))}
        </Route>
      );
    } else {
      return (
        <Route key={route.path} path={route.path} element={<route.element />} />
      );
    }
  });
};

export default renderRoutes;
