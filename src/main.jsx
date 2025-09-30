import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/root/Root.jsx";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Laptop from "./components/laptop/Laptop.jsx";
import Mobiles from "./components/mobiles/Mobiles.jsx";
import User from "./components/User/User.jsx";
import User2 from "./components/User/User2.jsx";

const user2Promise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "laptop", Component: Laptop },
      { path: "mobiles", Component: Mobiles },
      {
        path: "user",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: User,
      },
      {
        path: "user2",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <User2 user2Promise={user2Promise}></User2>
          </Suspense>
        ),
      },
    ],
  },

  { path: "/about", element: <div>About</div> },
  { path: "/Login", element: <div>Login</div> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
