import Contect from "./components/Contect";
import { createRoot } from "react-dom/client";
import Error from "./components/Error";
import Home from "./components/Home";
import CountryDetail from "./components/CountryDetail";
import App from "./App";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";

  const router = createBrowserRouter([

    {
      path: "/",
      element:<App />,
      errorElement:<Error />,
      children:[
        {
            path: "/",
            element: <Home />,
          },
        {
            path: "/contect",
            element: <Contect />,
          },
        {
          path: "/:country",
          element: <CountryDetail />,
        },
      ]
    },
  ]);

const root= createRoot(document.querySelector('#root'))

root.render( <RouterProvider router={router} />)