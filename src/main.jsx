import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Pages/Root";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import Home, { loader as homeMovieTvLoader } from "./Pages/Home";
import Movie from "./Pages/Movie";
import Search, { loader as searchLoader } from "./Pages/Search";
import Category from "./Pages/Category";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Originals from "./Pages/Originals";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./Store/store";

let persistor = persistStore(store);
import Index from "./Pages/Auth/Index";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeMovieTvLoader,
      },
      {
        path: "/search",
        element: <Search />,
        loader: searchLoader,
        id: "search",
      },
      {
        path: "/movies/:movieId",
        element: <Movie />,
      },
      {
        path: "/tv/:showId",
        element: <Originals />,
      },
      {
        path: "/:category",
        element: <Category />,
      },
    ],
  },
  {
    path: "/account",
    element: <Index />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "registration",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
