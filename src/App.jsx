import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import Games from "./Components/Games/Games";
import GameDetails from "./Components/GameDetail/GameDetails";
import { Helmet } from "react-helmet";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  
  // current user data
  const [currUser, setcurrUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("token") != null && currUser == null) {
      getUserData();
    }
  });

  function getUserData() {
    const userData = jwtDecode(localStorage.getItem("token"));
    setcurrUser(userData);
  }

  //logout function
  function clearUserData() {
    localStorage.removeItem("token");
    setcurrUser(null);
  }

  // protected Route
  function ProtectedRoute({ children }) {
    if (currUser == null) {
      return (
        <>
          <Navigate to={"/login"} />
        </>
      );
    } else {
      return <>{children}</>;
    }
  }

  //  routes
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout currUser={currUser} clearUserData={clearUserData} />,
      children: [
        {
          path: "",
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "game/:filter/:value",
          element: (
            <ProtectedRoute>
              <Games />
            </ProtectedRoute>
          ),
        },

        {
          path: "game/all",
          element: (
            <ProtectedRoute>
              <Games />
            </ProtectedRoute>
          ),
        },
        {
          path: "game/gameDetails/:id",
          element: (
            <ProtectedRoute>
              <GameDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "home",
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        { path: "login", element: <Login getUserData={getUserData}  /> },
        { path: "register", element: <Register /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
    <Helmet><title>Game Over</title></Helmet>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
