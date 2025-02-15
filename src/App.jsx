import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const routes = [
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
];

const App = () => {
  return (
    <>
      <main>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path}/>
          ))}
        </Routes>
      </main>
    </>
  );
};

export default App;
