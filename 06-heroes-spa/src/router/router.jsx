import { Navigate, createBrowserRouter } from "react-router-dom";
import { DcPage, MarvelPage, HeroePage, SearchPage } from "../heroes";
import { LoginPage } from "../auth";
import { HeroesApp } from "../HeroesApp";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <HeroesApp/>,
      children: [
        {
          path: 'marvel',
          element: <MarvelPage/>
        },
        {
          path: 'dc',
          element: <DcPage/>
        },
        {
          path: 'search',
          element: <SearchPage/>
        },
        {
          path: '/*',
          element: <Navigate to="/marvel" />
        }
      ]
    },
    {
      path: 'login',
      element: <LoginPage/>
    },

    {
      path: 'heroe/:id',
      element: <HeroePage/>,
    },
  ])