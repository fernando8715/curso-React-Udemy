import { Navigate, createBrowserRouter } from "react-router-dom";
import { DcPage, MarvelPage, HeroePage, SearchPage } from "../heroes";
import { LoginPage } from "../auth";
import { HeroesApp } from "../HeroesApp";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <PublicRoute> <LoginPage/> </PublicRoute>,
      children: [
        {
          path: '/*',
          element: <Navigate to={'/'} />
        }
      ]
    },  
    {
      path: '/heroes',
      element: <PrivateRoute> <HeroesApp/> </PrivateRoute> ,
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
          path: '/heroes/:id',
          element: <HeroePage/>,
        },
      ]
    },
      
  ])