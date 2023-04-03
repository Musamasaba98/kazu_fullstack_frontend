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
import Login, { action as loginAction } from "./Pages/Auth/Login";
import MyList from "./Pages/MyList";
import AddIndex, {
  loader as addMovieLoader,
  action as addMovieAction,
} from "./Pages/AddMovie/Index";
import EditMovie from "./Pages/AddMovie/Edit/Index";
import Primary, {
  loader as companyLoader,
} from "./Pages/AddMovie/Edit/Primary";
import Images from "./Pages/AddMovie/Edit/Images";
import MovieCrew from "./Pages/AddMovie/Edit/MovieCrew";
import MovieCast from "./Pages/AddMovie/Edit/MovieCast";
import Video from "./Pages/AddMovie/Edit/Video";
import Person from "./Pages/AddPerson/Index";
import EditPerson from "./Pages/AddPerson/Edit";
import JobTitle from "./Pages/JobTitle/Index";
import EditJobTitle from "./Pages/JobTitle/Edit";
import Department from "./Pages/AddDepartment/Index";
import EditDepartment from "./Pages/AddDepartment/Edit";
import Genre from "./Pages/Genre/Index";
import EditGenre from "./Pages/Genre/Edit";

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
        path: "/mylist",
        element: <MyList />,
      },
      {
        path: "movies/create",
        element: <AddIndex />,
        loader: addMovieLoader,
        action: addMovieAction,
      },
      {
        path: "/movies/:movieId",
        element: <Movie />,
      },
      {
        path: "movies/:movieId/edit",
        element: <EditMovie />,
        children: [
          { index: true, element: <Primary />, loader: companyLoader },
          {
            path: "images",
            element: <Images />,
          },
          {
            path: "videos",
            element: <Video />,
          },
          {
            path: "movie_cast",
            element: <MovieCast />,
          },
          {
            path: "movie_crew",
            element: <MovieCrew />,
          },
        ],
      },
      {
        path: "/person/create",
        element: <Person />,
      },
      {
        path: "/person/create/:personId/edit",
        element: <EditPerson />,
      },
      {
        path: "/genre/create",
        element: <Genre />,
      },
      {
        path: "/genre/create/:genreId/edit",
        element: <EditGenre />,
      },
      {
        path: "/department/create",
        element: <Department />,
      },
      {
        path: "/department/:departmentId/edit",
        element: <EditDepartment />,
      },
      {
        path: "/jobtitle/create",
        element: <JobTitle />,
      },
      {
        path: "/jobtitle/:jobtitleId/edit",
        element: <EditJobTitle />,
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
        action: loginAction,
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
